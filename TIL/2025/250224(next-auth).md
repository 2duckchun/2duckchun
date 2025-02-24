# NextAuth 세팅 흐름

1. auth 메서드 생성
 
2. client 전용 프로바이더 생성 `SessionProvider`

3. /app/api/auth/[...nextauth]/route.ts에 GET, POST 뚫어놓기
  - session 데이터를 갱신할 때, 내부적으로 api/auth/session 등에 HTTP GET 요청을 날린다.

4. 로그인 정책 세부 구현
