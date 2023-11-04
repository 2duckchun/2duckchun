# LocalStorage 타입스크립트

- abstract 클래스로는 인스턴스를 만들어낼 수 없지만 클래스를 확장하여 다른 클래스를 만들어내는 토대로 활용할 수 있다.
- `protected` 접근제한자는 하위 클래스가 상위 클래스의 프로퍼티를 접근 가능하게 한다. (그러므로 abstract에 어울린다. abstract는 클래스를 속여 만든 것이기 때문)
- abstract 클래스 내부에 abstract 메서드가 있을 경우, 해당 abstract 클래스를 상속받은 클래스는 abstract 메서드를 구현해야한다.
- **타입스크립트의 abstract 클래스가 자바스크립트 코드로 변환되면 일반적인 클래스가 된다.**

```ts
// LocalStorage Interface
abstract class LocalStorage<T> {
  protected items: Items<T>;
  constructor() {
    this.items = {};
  }
  abstract length(): number;
  abstract key(index: number): T;
  abstract getItem(key: string): T;
  abstract setItem(key: string, value: T): void;
  abstract removeItem(key: string): void;
  abstract clear(): void;
}
interface Items<T> {
  [key: string]: T;
}
class SuperStorage extends LocalStorage<string> {
  constructor() {
    super(); // 상속받은 클래스의 constructor를 그대로 상속받는다.
  }
  public key(index: number) {
    return Object.keys(this.items)[index];
  }
  public length() {
    return Object.keys(this.items).length;
  }
  public getItem(key: string) {
    return this.items[key];
  }
  public setItem(key: string, value: string) {
    this.items[key] = value;
  }
  public removeItem(key: string) {
    delete this.items[key];
  }
  public clear() {
    this.items = {};
  }
}
```
