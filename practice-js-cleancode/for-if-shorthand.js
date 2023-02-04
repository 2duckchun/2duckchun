const grades = [80.55, 90, -95, -45, 44.3, 100, 177]
/* 
아래 조건에 따른 새로운 배열을 만들어서 console.log 해야 합니다.
1. 0 ~ 100점이 유효한 점수입니다.
2. 소수점을 제거해주세요.
3. 각 엘레멘트의 뒤에 '점'을 추가해주십시오. ex) 80점
4. console.log로 출력 해주십시오.
*/

const validGrades = [] // 새로운 배열입니다.

// 1번 풀이
for (let grade of grades) {
  if (grade >=0 && grade <= 100) {
    const validGrade = Math.floor(grade) + "점"
    validGrades.push(validGrade)
  }
}

for (let validGrade of validGrades) {
  console.log(validGrade)
}

// 2번 풀이
grades.filter(el => el >= 0 && el <= 100)
.map(el => Math.floor(el) + '점')
.forEach(el => console.log(el))

// 3번 풀이
const validScroe = el => el >=0 && el <= 100
const IntegerAndSuffix = el => Math.floor(el) + '점'
const print = el => console.log(el)

grades.filter(validScroe)
.map(IntegerAndSuffix)
.forEach(print)