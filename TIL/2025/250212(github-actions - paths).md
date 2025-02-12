# github-actions

```yaml
name: 'github-action 이름'
on:
  push:
    paths: # 아래 디렉터리의 변경된 코드를 가진 상태에서 push 이벤트가 일어나면
      - 'project1/**'
      - 'project2/**'
    branches: # develop 브랜치에서
      - develop
  pull_request: # 아래 디렉터리의 변경된 코드를 가진 상태에서 pull_request 이벤트가 일어나면
    paths:
      - 'project1/**'
      - 'project2/**'
    branches: # develop 브랜치에서
      - develop

jobs:
  e2e-test:
    runs-on: ubuntu-latest # 최신 우분투 운영체제에서 실행
    env:
      API_URL: 'http://mock-url.com/'
      AUTH_SECRET: 'mock env #12DF3FGge4Hed23'
    steps:
      - name: Checkout # 소스 코드를 가져옴
        uses: actions/checkout@v4

      - uses: pnpm/action-setup@v4 # pnpm 등 패키지 매니저 설치
        name: Install pnpm
        with:
          run_install: false

      - name: Install Node.js # nodejs 설치
        uses: actions/setup-node@v4
        with:
          node-version-file: '.nvmrc'
          cache: 'pnpm'

      - name: Install dependencies # 디펜던시 설치
        run: pnpm install --frozen-lockfile

      - name: Run Prettier # root package.json에 있는 명령어 실행 1
        run: pnpm root:prettier-check

      - name: Run ESLint # root package.json에 있는 명령어 실행 2
        run: pnpm turbo:lint

      - name: Run CSpell # root package.json에 있는 명령어 실행 3
        run: pnpm root:cspell
```