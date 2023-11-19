/**
 * 다양한 연극을 외주로 받아서 공연하는 극단이 있다고 가정해보자.
 * 공연 요청이 들어오면 연극의 장르와 관객 규모를 기초로 비용을 책정해야 한다.
 * 현재 이 극단은 비극(tragedy)과 희극(comedy)만 공연한다.
 * 공연료와 별개로 포인트(volume credit)를 지급해서 다음번 의로시 공연료를 할인받을 수도 있다.
 */

// 공연 연극 정보
const plays = {
  hamlet: {
    name: "Hamlet",
    type: "tragedy",
  },
  "as-like": {
    name: "As You Like It",
    type: "comedy",
  },
  othello: {
    name: "Othello",
    type: "tragedy",
  },
};

// 청구서(invoice) 정보
const invoice = {
  customer: "BigCo",
  performance: [
    {
      playID: "hamlet",
      audience: 55,
    },
    {
      playID: "as-like",
      audience: 35,
    },
    {
      playID: "othello",
      audience: 40,
    },
  ],
};

// 청구서를 출력하는 코드
function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구 내역 (고객명: ${invoice.customer})\n`;
  const format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    mininumFractionDigits: 2,
  }).format;

  for (let perf of invoice.performance) {
    const play = plays[perf.playID];
    let thisAmount = 0;
    switch (play.type) {
      case "tragedy": // 비극
        thisAmount = 40000;
        if (perf.audience > 30) {
          thisAmount += 1000 * (perf.audience - 30);
        }
        break;
      case "comedy": // 희극
        if (perf.audience > 20) {
          thisAmount += 10000 + 500 * (perf.audience - 20);
        }
        thisAmount += 300 * perf.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${play.type}`);
    }
    volumeCredits += Math.max(perf.audience - 30, 0);
    if ("comedy" === play.type) volumeCredits += Math.floor(perf.audience / 5);

    result += ` ${play.name}: ${format(thisAmount / 100)} (${
      perf.audience
    }석)\n`;
    totalAmount += thisAmount;
  }

  result += `총액: ${format(totalAmount / 100)}\n`;
  result += `적립 포인트: ${volumeCredits}점\n`;
  return result;
}

console.log(statement(invoice, plays));
