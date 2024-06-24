## namespace(이름공간)

namespace는 프로그래머들이 협업간 사용한 변수명들이 서로 충돌하지 않도록 특정한 변수 공간을 의미한다. namespace를 적절히 사용하면 다양한 사람들과 협업하더라도 변수명이 겹쳐 링크 에러가 날 확률은 크게 줄어든다.

## std:: (standard namespace)

C++의 표준 라이브러리는 모두 std:: 네임스페이스 안에 만들어져 있다. 따라서 C++ 빌트인 라이브러리를 쓰는 경우에는 std:: 접두어를 붙여주어야 한다.

## using 지시어

모든 C++ 표준 라이브러리에 std::를 붙이는 것은 굉장히 지루한 일이다. 네임스페이스를 붙이는 단순 반복 작업을 줄이기 위해 using 지시어를 활용할 수 있다.

```c++
using std::cout; // cout에 대해서면 std:: 생략

cout << "Hello" << std::endl;

```

```c++
using namespace std; // std 네임스페이스 안에 선언된 모든 표준 라이브러리들에 대해 std:: 생략

cout << "World" << std::endl;
```

## `#include <iostream>`과 std

C++ 표준에서 제공하는 모든 라이브러리들의 네임스페이스는 std::이므로 `<iostream>`의 코드를 사용할때도 std::를 반드시 붙여주어야함. 이 역시도 using 지시어를 잘 활용하면 std:: 접두어를 생략할 수 있음.


```c++
#include <iostream>;

using namespace std;
```