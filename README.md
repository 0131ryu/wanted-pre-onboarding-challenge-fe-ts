# wanted-pre-onboarding-challenge-fe-ts
원티드 챌린지
## 챌린지 과제 가이드

section4 typescript exercise 
> branch section4

section3  다른 사람의 tyscript를 보고 구현해보기

`Jayun Lee`님의 typescript를 참고했습니다
(https://github.com/jaypedia/wanted-pre-onboarding-challenge-fe-2/blob/main/src/index.ts)

1. `id`, `content`, `isCompleted`, `category`가 필수로 들어가게 함(create)

2. Todo는 형식만 참조해야 할 것 같습니다
▶ 설계는 Todo에 값을 넣으라고 만드신 거 같아 `Todo.push`를
하려 하니 형식만 참조하고 값으로는 이용할 수 없었습니다
▶ 임의로 `let TodoLists: Todo[];`를 만들었습니다

3. `interface`인 `CreateTodo`, `GetTodos`, `GetTodoById`,
`UpdateTodo`, `UpdateTags`, `DeleteAllTodos`, `DeleteTodoById`
`DeleteAllTags`, `DeleteTag` 있는 부분들이 오류를 만들어냄
▶ 여러 방법을 시도했으나 결국 매개변수만 남겨두고 구현

4. 각각의 매개변수에 타입 지정
▶ 매개변수로 들어가는 `todo`를 `todo: string`으로 만들어서 진행

>요구 사항을 구현하지 않고 설계만합니다.
- Todo 앱을 Interface로 설계하고 모델링하는 챌린지 과제입니다.
- 모든 요구사항은 선언을 기반으로 수행합니다.
- 제출할 저장소 명은 wanted-pre-onboarding-challenge-fe-ts로 생성해 주세요. (Public 권한 필요)
- 완성한 과제의 저장소 링크를 모집 마감 후 설문 조사를 통해 제출해주세요. (개강 시 설문 조사 링크 전달 예정)
- 과제 수행 개수에 따라 기본적인 평가가 이루어지며, 커리큘럼 운영 과정에서 최소한의 수준을 파악하기 위한 용도입니다.
- 해당 과제에 대한 해설은 개강 후 진행될 예정입니다.
- README.md를 꼭 작성해 주세요. 본인에 대한 소개나 프로젝트 소개 등 자유롭게 작성해주시면 됩니다.

## 📝 Requirements

### 필수 요구사항
>아래의 Todo 앱 요구사항을 참고하여
- 필요한 데이터를 모두 TypeScript's Interface로 모델링한다.
- 사용되는 모든 함수를 `선언부만` 만든다.
  - 함수 및 클래스의 내부는 구현하지 않습니다.
- **Interface만을 따라 작성한 코드가 동작하는 애플리케이션이 되도록 유도하셔야합니다.**

### Todo

```js
Todo {
  아이디(required),
  내용(required),
  완료여부(required),
  카테고리(required),
  태그들(optional),
}
```

#### CREATE

- 할 일을 추가할 수 있다.
- 내용없이 추가할 수 없다.

#### READ

- 모든 할 일을 조회할 수 있다.
- ID를 기반으로 특정 할 일을 조회할 수 있다.

#### UPDATE

- ID를 제외한 모든 속성을 수정할 수 있다.
- 특정 할 일의 특정 태그를 수정할 수 있다.

#### DELETE

- ID를 기반으로 특정 할 일을 삭제할 수 있다.
- 모든 할 일을 제거할 수 있다.
- 특정 할 일의 특정 태그를 삭제할 수 있다.
- 특정 할 일의 모든 태그를 제거할 수 있다.


#### Modeling (Shape)

```js
Item {
  property(required),
  property(optional),
}
```
