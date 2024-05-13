# INPUT[FILE]

`<input>` 엘레멘트와 `type="file"` 을 같이 사용하면 하나 또는 그 이상의 파일을 디바이스 스토리지로부터 가져올 수 있다. 선택된 파일은 form submission 기능이나 자바스크립트 코드, File API를 통해 서버로 업로드될 수 있다.

```html
<label for="avatar">Choose a profile picture:</label>

<input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
```

## Value

input[file]의 value 속성은 선택된 파일의 경로에 해당하는 스트링으로 구성된다. 만약 파일이 선택되지 않았다면 value의 값은 빈 스트링 `""`이 된다. 유저가 여러 개의 파일을 선택했다면 value에는 선택한 파일 리스트에서 첫번째 파일의 경로만 보여지게 된다. 첫 번째 파일을 제외한 나머지 파일은 input의 HTMLInputElement.files 프로퍼티에서 확인할 수 있다. 

> file의 value에는 파일명 앞에 prefix로 `C:\fakepath\`가 붙어있다. 이는 악성 코드가 유저의 파일 구조를 예측할 수 없게 만들기 위해서이다.


## Additional attributes

### accept

input[file]이 받아들일 수 있는 파일의 타입을 정의하는 문자열을 입력하는 속성이다. 이 스트링은 콤마로 구분된 `unique file type specifiers` 리스트로 구성된다. 파일 유형은 여러가지 방식으로 구분이 될 수 있으므로, 특정 파일 형식을 여러개의 타입으로 구분할 수 있는 경우, 유형자 집합을 철저하게 제공해주는 것이 좋다.

예를 들어 Microsoft Word Files는 매우 많은 방식으로 식별될 수 있다.

```HTML
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

### capture

캡쳐 속성은 이미지 또는 동영상 캡처에 사용할 카메라를 지정하는 문자열이다. `user`는 사용자 방향 카메라(셀카) 또는 마이크로폰을 사용한다. `environment`는 바깥쪽을 향한 카메라 및 마이크를 사용하도록 지정한다. 이 속성이 누락된 경우 useragent는 자체적으로 수행할 작업을 자유롭게 결정할 수 있다. 페이싱 모드가 사용이 불가능한 경우, fallback으로 사용자가 선호하는 디폴트값을 선택할 수 있다.

### muitlple

input[file]의 multiple boolean 속성이 활성화되었을 경우, 인풋에 하나 이상의 파일을 추가할 수 있게 된다.