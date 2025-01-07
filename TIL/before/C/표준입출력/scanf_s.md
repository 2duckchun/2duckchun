# scanf_s

scanf_s는 문자를 입력받는 함수이다. scanf의 유래는 키보드 자체에서 입력된 값을 스캔 코드라 한 것에서 시작되었다.
scanf 코드 내부에서는 키보드에 입력된 데이터를 스캔하여 메모리에 저장하는데, 키보드에 입력이 가해지면 데이터가 입출력 버퍼로 이동하게 된다.

```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
	int age = 0;
	char name[36] = { 0 };

	printf("나이를 입력하세요.\n");
	scanf_s("%d%*c", &age);

	printf("성함을 입력하세요.\n");
	scanf_s("%s", &name, _countof(name));

	printf("당신의 나이 %d\n", age);
	printf("당신의 이름 %s\n", name);

	return 0;
}
```

`%*C` 는 값을 입력받은 후 입출력 버퍼를 날려버리겠다는 의미의 **형식문자**다.
첫번째 scanf에 `%*C`가 없다면 2번째 scanf_s의 버퍼를 읽어들일 때 여전히 문장 종료 이스케이프 문자인 `\n`이 메모리단에 남아있게 되어
알 수 없는 에러가 생기게 된다.
