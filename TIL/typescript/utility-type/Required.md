## Required<Type>
- 기존에 설정한 타입의 모든 프로퍼티를 필수값으로 인식하게 만드는 유틸리티 타입이다.
- 타입 객체에 옵셔널한 프로퍼티가 있어도 Required로 랩핑하게되면 모든 프로퍼티는 필수값이 된다.

```ts
// Required<Type>

type Farm = {
    pig?: number
    cow?: number
    dog?: number
    hen?: number
}

const farmA:Farm = {
    pig: 5,
    cow: 1
}

const farmB: Required<Farm> = {
    pig: 100,
    cow: 100,
    dog: 100,
    hen: 100
}
```