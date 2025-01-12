# git 관련 명령어 메모

## 리포지토리 HTTPS -> SSH로 전환

git remote set-url origin `SSH주소`

## push한 코드 커밋 돌려놓기

사용할 일이 없도록 하자

```bash
# 1개의 커밋만 뒤로 돌린다. 코드 변경사항은 유지됨 (stash하게 됨)
git reset --soft HEAD^1
```

또는 git revert 등 활용

```bash
git push -f origin main
```

