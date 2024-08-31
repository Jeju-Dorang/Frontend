# 🔗 Services

여기는 JejuDorang Team의 api directory 입니다.

---

### 🗒️ Description

각종 API 요청들을 모아둔 디렉토리

### 🔎 How to use

```ts
import { postLogin } from '@apis/postLogin';

return postLogin().then((res) => {
  doSomegthing();
});
```

### 🌱 How to contribute

- 만들고자 하는 서비스의 이름으로 현재 디렉토리의 하위에 디렉토리를 생성한다.
  - 디렉토리의 이름은 모두 소문자로 작성한다. `example.ts`
- API 요청을 이 곳에서만 정리하고, 전달한다.

### 💡 Example

```tsx
export const apiFunction = async()=>{
  return api.method<return type, data>(isrequireToken,url, data).then((res)=>{
    doSomething();
  })
}
```
