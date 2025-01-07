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

function statement(invoice, plays) {
  const statementData = {};
  statementData.customer = invoice.customer;
  statementData.performance = invoice.performance;

  return renderPlainText(statementData, plays);
}

function renderPlainText(data, plays) {
  let result = `청구 내역 (고객명: ${data.customer})\n`;
  for (let perf of data.performance) {
    result += ` ${playFor(perf).name}: ${USD(amountFor(perf))} (${
      perf.audience
    }석)\n`;
  }
  result += `총액: ${USD(totalAmount())}\n`;
  result += `적립 포인트: ${totalVolumeCredits()}점\n`;
  return result;

  function amountFor(aPerformance) {
    let thisAmount = 0;
    switch (playFor(aPerformance).type) {
      case "tragedy": // 비극
        thisAmount = 40000;
        if (aPerformance.audience > 30) {
          thisAmount += 1000 * (aPerformance.audience - 30);
        }
        break;
      case "comedy": // 희극
        if (aPerformance.audience > 20) {
          thisAmount += 10000 + 500 * (aPerformance.audience - 20);
        }
        thisAmount += 300 * aPerformance.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${playFor(aPerformance).type}`);
    }
    return thisAmount;
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  function volueCreditsFor(aPerformance) {
    let volumeCredits = 0;
    volumeCredits += Math.max(aPerformance.audience - 30, 0);
    if ("comedy" === playFor(aPerformance).type)
      volumeCredits += Math.floor(aPerformance.audience / 5);
    return volumeCredits;
  }

  function USD(aNumber) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      mininumFractionDigits: 2,
    }).format(aNumber / 100);
  }

  function totalVolumeCredits() {
    let volumeCredits = 0;
    for (let perf of data.performance) {
      volumeCredits += volueCreditsFor(perf);
    }
    return volumeCredits;
  }

  function totalAmount() {
    let result = 0;
    for (let perf of data.performance) {
      result += amountFor(perf);
    }
    return result;
  }
}

console.log(statement(invoice, plays));
