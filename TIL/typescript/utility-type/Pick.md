# Pick

- 특정 타입에서 몇개의 속성을 선택하여 타입을 정의함.
- Pick<특정타입, 타입명1 | 타입명2 | 타입명3>

```ts
type PeopleEntity = {
    id: string,
    kindof: "peagent" | "knight" | "magician" | "pope"
    age: number
    country: "night-elf" | "human"
}

type SomePeopleWithOutCountry = Pick<PeopleEntity, "id" | "kindof" | "age">

const duckchun:SomePeopleWithOutCountry = {
    id: "2duckchun",
    kindof: "peagent",
    age: 30
}
```