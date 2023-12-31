# LOOK-UP 테이블

- 배열[인덱스] 접근 방법을 활용한 코드의 질을 높히는 기법 중 하나.
- 별도의 조건 연산 없이 바로 배열 내 요소를 참조하므로 속도가 빠르다.
- 값을 변경할 때는 배열 내 요소만 변경해주면 되므로 유지보수에도 용이하다.

```c
#include <stdio.h>

int main(void)
{

	double nLookUpTable[10] = { 0, 0.1, 0.25,
			0.5, 0.5, 0.5, 0.65, 0.7, 0.8, 0.95 };

	int nAge = 0, nFee = 1000;
	printf("나이를 입력하세요. : ");
	scanf_s("%d", &nAge);

	if (nAge < 0) {
		nAge = 1;
	}
	else if (nAge > 10) {
		nAge = 10;
	}

	printf("최종요금: %d원\n", (int)(nFee * nLookUpTable[nAge - 1]));

	return 0;
}
```