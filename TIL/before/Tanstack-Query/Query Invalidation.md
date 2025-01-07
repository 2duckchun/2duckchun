# Query Invalidation

쿼리가 stale 될 때까지 기다렸다가 데이터를 다시 페칭하는 방식은 항상 효과적이지는 않다. 이를 대신하기 위해 오래된 쿼리를 개발자가 직접 제어해서 다시 새로운 데이터를 페칭할 수 있는 `invalidateQueries` 메서드가 있다.

```ts
import { useQuery, useQueryClient } from '@tanstack/react-query'

// Get QueryClient from the context
const queryClient = useQueryClient()

queryClient.invalidateQueries({ queryKey: ['todos'] })

// Both queries below will be invalidated
const todoListQuery = useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodoList,
})
const todoListQuery = useQuery({
  queryKey: ['todos', { page: 1 }],
  queryFn: fetchTodoList,
})
```

특정 변수가 포함된 쿼리를 무효화하려면 보다 구체적인 쿼리 키를 invalidateQueries 메서드에 전달하여 무효화할 수 있다.

```ts
queryClient.invalidateQueries({
  queryKey: ['todos', { type: 'done' }],
})

// The query below will be invalidated
const todoListQuery = useQuery({
  queryKey: ['todos', { type: 'done' }],
  queryFn: fetchTodoList,
})

// However, the following query below will NOT be invalidated
const todoListQuery = useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodoList,
})
```