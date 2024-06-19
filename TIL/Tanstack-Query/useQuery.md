# useQuery

```ts
const { data, isLoading, isPending } = useQuery({
    queryKey: ['key', something],
    initialData: [],
    queryFn: async () => {
        const data = await fetch('url', { ...options })
        // ...
    }
    staleTime: 0
})
```

- Query는 비동기적 데이터 자원을 선언적으로 불러오는 탄스택쿼리의 데이터 호출 방식이다.
- queryFn에는 Promise를 할당할 수 있다. async/await 와 같이 Promise를 반환하는 함수를 queryFn에 할당해줘도 상관없다.
- queryFn을 이용해 가져온 데이터들은 queryKey에 결합되어 있고, 이 값은 탄스택 쿼리 내부적으로 해싱으로 처리되어 서로 연결된다.
- useQuery는 화면단 처리에 필요한 여러 값들을 리턴해준다. 대표적으로 에러와 관련된 플래그도 확인할 수 있는데(isError), 탄스택 쿼리의 에러처리는 queryFn에서 에러가 난 것을 감지하여 화면단으로 보내주기에 가능하다.