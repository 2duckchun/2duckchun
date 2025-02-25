# Next.js Server Actions을 Storybook에서 모킹하기

Next.js의 Server Actions는 서버 사이드에서만 실행되어야 하는데, 어떻게 Storybook에서 테스트할 수 있을까? Server Actions를 Storybook에서 효과적으로 모킹하는 방법을 알아보자.

## Server Action 코드 예시

```ts
'use server'

export const changeMembership = async (data: ChangeMembershipRequest) => {
  return handleAction({
    endpoint: API_ENDPOINT.membership.changeMembership(),
    schema: changeMembershipResponseSchema,
    data,
  })
}
```

## Storybook 모킹

```ts
import * as changeMembership from '@/actions/membership/change-membership'

export const Story = {
  decorators: [
    (Story) => {
      createMock(changeMembership, 'changeMembership').mockResolvedValue(
        CHANGE_MEMBERSHIP_FIXTURE.UPGRADE_SUCCESS
      )
      return <Story />
    },
  ],
}
```

## 왜 동작할까?

이게 동작하는 이유는 크게 두가지다.

1. 모듈 임포트 방식 : import * as changeMembership처럼 전체 모듈을 가져오면, 'use server' 지시어와 관계없이 함수를 모킹할 수 있다.
2. 런타임 환경 차이 : Storybook은 Next.js 런타임이 아닌 별도의 환경에서 실행되므로, 'use server' 지시어가 무시된다. (정확히는 의미가 없어짐)

# 모킹 방식 선택

Storybook은 크게 두 가지 모킹 방식을 제공한다.

1. 파라미터 방식

```ts
export const Story = {
  parameters: {
    moduleMocks: {
      mock: () => {
        createMock(useCurrentUser, 'useCurrentUser').mockResolvedValue({
          status: 'authenticated',
          data: USER_FIXTURE
        })
      }
    }
  }
}
```

2. 데코레이터 방식

```ts
export const Story = {
  decorators: [
    (Story) => {
      createMock(changeMembership, 'changeMembership').mockResolvedValue(SUCCESS_FIXTURE)
      return <Story />
    }
  ]
}
```

## 차이점

- `parameters.moduleMocks` : 스토리 로드 시 한 번만 실행. 전역적인 상태 모킹에 적합
- `decorators` : 매 렌더링마다 실행. 동적인 액션 모킹에 적합