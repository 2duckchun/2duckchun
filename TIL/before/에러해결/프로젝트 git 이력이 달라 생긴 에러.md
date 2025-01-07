### 프로젝트의 git 이력이 달라 생긴 에러

- 작업물을 먼저 만들고나서 회사 리포지토리에 커밋, 푸쉬를 하니 에러가 났다.
- 에러는 `error: failed to push some refs to 'https://github.com/dabledev/dable_admin.git'` 였다.
- 이는 원격 저장소의 변경 사항이 로컬에 이미 통합되었을 때 나타나는 에러이다.
- `git pull origin main` 명령어를 입력해서 로컬 저장소를 최신상태로 유지해서 문제를 해결하고자 하였다.
- 그럼에도 불구하고 에러가 또 났다. 에러메세지는 `fatal: refusing to merge unrelated histories` 였다.
- 이 에러는 내가 미리 작업한 산출물의 git과 회사 리포지토리의 git의 이력이 달라서 생긴 에러이다.
- 이런 에러는 사실상 나면 안되는 에러이다. 일단 `git pull origin main --allow-unrelated-histories` 명령어를 사용해 관련없는 이력을 머지할 수 있게 했다.
- 이 사건은 회사 git에 대한 권한이 나에게 없는 관계로 작업자가 리포지토리를 새롭게 만들 수 없는 상황에서 작업자가 먼저 따로 작업을 해서 벌어진 일이었다. 사실 작업 전에 리포지토리 개설을 요청드렸으나 그 시간이 많이 지연되었다.
- 다음부터 이런일이 재발하지 않도록 회사 git 계정에 대한 정보를 받아놓았다.