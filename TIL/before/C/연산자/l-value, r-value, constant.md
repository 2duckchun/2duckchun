## l-value (location, left)

- 왼쪽 피연산자를 의미한다.
- l-value는 Location, 메모리 위치 정보를 의미한다고 볼 수 있다.
- Overwrite가 일어나며 기본값이 사라진다.
- 상수는 l-value가 될 수 없다. (3 = 4가 허용되지 않는 것과 같은 의미)

## r-value (read, right)

- 오른쪽 피연산자를 의미한다.
- 값을 읽어올 수 있다.

## 배열의 이름은 상수다
- 배열명 그 자체는 *주소상수*다. 즉 변수가 아니다.
- 배열명은 변수가 아니므로 어떤 값을 할당할 수 없다.

```c
int main(void) {
    char szBuffer[32] = { 0 };
    szBuffer = 'A'; // 배열의 이름은 주소상수이므로 이렇게 값을 대입할 수 없다.

    return 0;
}

```