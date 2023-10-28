# Record<keys, type>
- 특정 키에 하나의 타입을 매핑하는 유틸리티 타입이다.
- 키 타입과 이에 상응하는 타입을 별도로 관리하는데 용이할 수 있다.

```ts
// Record<Keys,Type>

type animalKey = "lion" | "tiger" | "horse" | "monkey"

type animalInfo = {
    age: number,
    country: string
    feed: "meat" | "hay" | "fruit"
    size: "small" | "middle" | "big"
}

const zooFamily: Record<animalKey, animalInfo> = {
    lion: {
        age: 5,
        country: "africa",
        feed: "meat",
        size: "middle"
    },
    tiger: {
        age: 5,
        country: "africa",
        feed: "meat",
        size: "middle"
    },
    horse: {
        age: 5,
        country: "africa",
        feed: "hay",
        size: "big"
    },
    monkey: {
        age: 5,
        country: "africa",
        feed: "fruit",
        size: "small"
    }
}
```