# Welcome to REACT! Second React.app 😎
![](https://velog.velcdn.com/images/joyfive/post/01804c0a-4bbf-4949-ac0f-d77da3c7f707/image.crdownload)

![](https://velog.velcdn.com/images/joyfive/post/3471c929-f7dc-4ac7-8ef5-93d00503f5ef/image.gif)

▶️[Go to Project](https://w3-godolist.vercel.app/)

## 페이지 소개
리액트의 기본 기능을 연습하고 state 개념을 다잡기 위한 1page 투두리스트 웹앱
- Add 버튼
- Reset 버튼
- 추가된(등록된) 투두아이템의 삭제기능, 완료/취소 기능

## 기술 스택
> CSS / REACT(JS, JSX) / vercel

## 컴포넌트 구성 및 WF
![](https://velog.velcdn.com/images/joyfive/post/4209c89b-6738-4db4-b60c-21ac6eca2b80/image.jpg)

```js
<Layout>
    <Header />
    <Form />
    <List>
        <Todo />
    </List>
</Layout>
```
## 구현 기능
### 기능1: Add 버튼
- form에서 등록한 

### 기능2: Reset 버튼
- 버튼 클릭 시 스테이트를 "" 로 변환 

### 기능3: 추가된(등록된) 투두아이템의 삭제 기능
- 

### 기능4 : 추가된(등록된) 투두아이템의 상태 수정 기능

## 디자인 & css
### <컨셉 1> Google
- Todo list의 인풋 폼을 보면서 디자인 컨셉을 '구글 홈페이지'로 결정했습니다. 
- 구글 홈페이지의 헤더 스타일, 타이틀 컬러, 인풋폼과 버튼의 스타일을 모티브로 약간 변형하여 적용했습니다. 
### <컨셉 2> Google Keep
- 투두리스트의 리스트와 각 아이템 카드는 Google Keep 서비스를 참고하였으나, <br>
기간 내 컬러 선택 기능을 구현하기는 아직 어려운 관계로 무채색으로 통일하되 <br> 
할일과 완료한 일의 스타일에 변주를 주고, 이모지를 활용하여 밋밋한 디자인에 유머를 더했습니다.

### CSS
- 아직 스타일 컴포넌트를 학습하기 이전으로, 일반적인 html, css 방식으로 Jsx 코드 내에서 className 을 부여하고,
css 파일을 분리하여 임포트하였습니다. 
- 주요 css : Flex, hover, media query
- 기존 연습해왔던 width, font, color 외 flex 박스와 hover interaction, media query를 활용한 반응형 작업을 시도했습니다.

## 배운점 & 아쉬운점
### 배운점👍
- JS도 능숙하게 다루는 상태가 아니다보니 React로 작업을 하면서 JS, React 문법들을 <br>함께 찾아보면서 진행했는데, 비슷한듯 다른 언어의 규칙과 개념을 많이 정리할 수 있었던 프로젝트입니다. 
- useState는 기존 리액트 첫 프로젝트에서 한번 접했던 개념이기는 하지만, <br>이번 프로젝트에서는 여러개의 조건이 추가되면서 useState를 활용할 수 있는 범위가 넓어진 것 같습니다.
- 하나의 파일이 아닌 컴포넌트를 나누어 작업한 첫 프로젝트이다 보니 props와 props.child 를 본격적으로 사용해볼 수 있었고, <br>props.child의 경우 연결되는 페이지, 컴포넌트가 많아질 수록 더욱 유용하게 사용할 수 있을 것 같습니다.
- 과제 목표에는 없었지만, 기존에 진행했던 프로젝트에서 만든 reset 기능을 활용하여 숫자 -> 문자열에 응용해보았는데, <br>진행하는 프로젝트가 많아질 수록 기존 작업물이 에셋화 되어가겠다는 기대가 듭니다. 

### 아쉬운점👀
- props.child를 적용하는 과정에서, 축약형으로 'props'만 표기하는 방식을 차용하였는데, <br> 중괄호 {} 를 생략하면서 오류가 발생하고, 디버깅에 쓸데없는 시간을 소모한 것 같아 아쉬움이 남습니다. 
하지만, 실수를 한 덕분에 props를 생략하는 경우 파라미터 자리에도 동일하게 중괄호를 표기해야하는 포인트를 잊지 않을 것 같습니다😎
- footer 를 넣고 싶었는데, 반응형 작업을 포함해서 고려하다보니 680px 이하 구간으로 떨어지면 <br>Layout 컴포넌트에서 설정한 전체 div 박스 혹은 푸터 영역 박스의 width값이 100%가 아닌 60% 정도로 적용되는 이슈가 발생했습니다. 
해당 부분은 원인을 찾지 못해, footer를 제외하고 모바일 반응형 작업을 진행하는것으로 타협하여 아쉬움이 남습니다. <br>
다음 프로젝트 진행 시 하단에 고정되는 형태의 footer 영역을 다시 추가해보려고 합니다😢 <br>
오늘 안되면 내일 또 트라이 하면 되지!



Copyright 2022. hang-hae99 9th joyfive. all rights reserved.
