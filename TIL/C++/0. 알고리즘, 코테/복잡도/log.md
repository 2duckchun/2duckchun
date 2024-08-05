# log

- N은 반씩 쪼개져 연산에 재사용되므로 O(logN) 시간복잡도를 가진다.

```cpp
#include <iostream>
using namespace std;
int N, cnt;
void solve(int N) {
	int a = 0, i = N;
	while (i > 0) {
		a += i;
		i /= 2;
		cnt++;
	}
	cout << a << '\n';
}

int main() {
	cin >> N;
	solve(N);
	cout << cnt << endl;
	return 0;
}
```