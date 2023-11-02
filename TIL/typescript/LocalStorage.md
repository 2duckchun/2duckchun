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
    super();
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
