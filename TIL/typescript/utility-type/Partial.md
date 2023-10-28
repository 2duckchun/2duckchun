# Partial<Type>
- Partial은 특정 타입의 하위 집합을 의미한다.
- 정해진 집합의 하위 개념이므로 특정 엔티티의 프로퍼티 중 일부를 수정할 때 사용하기 좋다.

```ts
// Partial<Type>

type Post = {
    title: 'string'
    index: number
    content: string
}

const updatePostContent = (post:Post, updateContent: Partial<Post>):Post => {
    return {...post, ...updateContent}
}
```