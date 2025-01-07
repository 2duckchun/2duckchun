# split()

C++의 STL은 split 함수를 지원하지 않기 때문에 해당 구현을 이용하기 위해서는 직접 만드는 수밖에 없다.

```cpp
#include <iostream>
#include <vector>
#include <string>
using namespace std;

vector<string> split(string s, string delimeter) {
	vector<string> v;
	int pos = 0;
	while ((pos = s.find(delimeter)) != string::npos) {
		string token = s.substr(0, pos);
		v.push_back(token);
		s.erase(0, pos + delimeter.length());
	}
	v.push_back(s);
	return v;
}

int main() {
	string s = "안녕하세요 덕춘이는 킹갓제너럴 천재입니다 정말이에요!", d = " ";
	vector<string> a = split(s, d);
	for (string b : a) cout << b << "\n";
	return 0;
}
```