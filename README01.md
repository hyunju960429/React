# 1_ node.js설치
* 자바스크립트를 브라우저 밖에서도 동작할 수 있게 하는 런타임환경
* Node.js가 제공하는것이 npm(Node Package Manager)
* npm이란 node.js로 만들어진 필요한 모듈을 다운받고 관리해줌. 다른 개발자가 만들어둔 유용한 node.js로 만들어진 툴로 가져다 쓸 수 있음
* npm을 이용한 유용한 라이브러리를 다운받을 예정(개발은 가져다쓰는게 절반이다)


1. node.js 파일 다운받기,설치
   
![image](https://github.com/hyunju960429/node.js-connect/assets/145514544/6d68169f-35d2-409c-aa80-8833059df209)

2. cmd 오픈(관리자권한으로 실행 권장)
3. cmd 화면에서
   ```
   node -v
   ```
를 입력하면 아래와 같이 버전이 나오면 설치 완료된것이다.

![image](https://github.com/hyunju960429/node.js-connect/assets/145514544/0445efcb-9047-4a8e-be42-ac8fb802d7f7)

4. node.js를 설치하면 npm이 자동 설치된다
```
npm -v
```

![image](https://github.com/hyunju960429/node.js-connect/assets/145514544/053a40a7-c31d-4a6f-a8ee-4e55dc81b07c)

* npx는 npm이 설치될때 함께 설치가 된다
```
npx -v
```
![image](https://github.com/hyunju960429/node.js-connect/assets/145514544/9bc5285a-0656-4d58-8efa-82a567ffaa1b)


*npm --> 외부라이브러리를 쉽게 설치하고 버전을 관리 할 수 있게 한다 --> package.json을 만들게 된다
*npx --> 라이브러리를 개별적으로 실행하고자 할때 사용하는것임


-------------------------------------------------------


# 1. 폴더 생성
## - 프로젝트를 만들 폴더를 만든다. ex) my_react
# 2. 리액트에서 필요한 패키지를 자동으로 설치해주는 명령어를 입력한다.

```
npx create-react-app 리액트가실행될폴더명
아래와 같이 시행한다.
npx create-react-app my-app 
```
my_react>my-app 폴더구조가 만들어진다

my-app폴더 안으로 진입한다⬇️
```
cd my-app
```

my-app안에 소스를 실행한다.⬇️
```
npm start
```

# SPA : Single Page Applycation
- 페이지는 하나인데 여러 페이지인것처럼 눈속임을 한다. 페이지가 여러개인것처럼 보이지만 사실은 하나의 페이지다. => 첫로딩시간이 길지만 그 이후 로딩시간이 짧음.
- 페이지를 매번 새로 가져올 필요가 없음, 웹사이트를 모바일처럼 사용할 수 있음.

# REACT 확장프로그램 -> VS code에서 install⬇️
![image](https://github.com/hyunju960429/React/assets/145514544/69d9bdf5-1d55-413d-a75d-4f9e167ac83b)


