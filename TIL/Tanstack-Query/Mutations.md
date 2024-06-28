# Mutations

- 쿼리와 달리 뮤테이션은 데이터의 생성, 수정, 삭제에 사용하거나 서버의 사이드 이펙트를 수행하는데 사용한다.
- 이러한 목적을 수행하기 위해 탠스택 쿼리에서는 `useMutation`을 제공한다.

```js
function App() {
  const mutation = useMutation({
    mutationFn: (newTodo) => {
      return axios.post('/todos', newTodo)
    },
  })

  return (
    <div>
      {mutation.isPending ? (
        'Adding todo...'
      ) : (
        <>
          {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}

          {mutation.isSuccess ? <div>Todo added!</div> : null}

          <button
            onClick={() => {
              mutation.mutate({ id: new Date(), title: 'Do Laundry' })
            }}
          >
            Create Todo
          </button>
        </>
      )}
    </div>
  )
}
```

뮤테이션은 아래 중 하나의 상태만을 가질 수 있다.

- `isIdle` or `status === 'idle'` - 뮤테이션이 현재 유예된 상태이거나 프레시/리셋된 상태
- `isPending` or `status === 'pending'` - 뮤테이션이 동작하고 있는 상태
- `isError` or `status === 'error'` - 뮤테이션이 에러에 봉착함
- `isSuccess` or `status === 'success'` - 뮤테이션이 성공했고, 데이터를 사용할 수 있는 상태

