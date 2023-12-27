# Json server 사용하기
--> 작은 서버를 만드는것 --> api소통할때 제일 많이 쓰이는 파일타입 입니다.

![image](https://github.com/hyunju960429/React/assets/145514544/822ca97d-a2ea-4566-9dca-a70c5210e109)

https://www.npmjs.com/package/json-server




1️⃣
```
npm install -g json-server
```


2️⃣ 확장명이 .json인 파일을 만든다 --> 반드시 Root에 만들어야한다.

![image](https://github.com/hyunju960429/React/assets/145514544/82ba926d-4285-4f07-8aff-38b9ff86fccb)
![image](https://github.com/hyunju960429/React/assets/145514544/da0fc7b8-0826-4c11-8abc-e5cab7f8ed88)

3️⃣ json서버 실행 --> 기본적으로 3000번에서 시작하는데 react가 3000번을 사용하고 있기 때문에 다른 포트번호를 알려줘야한다.

```
json-server --watch db.json --port 3004
```

# 혹시 안되면

```
npx json-server --watch db.json --port 3004
```


새창을 열고 주소창에 http://localhost:3004/products 경로입력하면

![image](https://github.com/hyunju960429/React/assets/145514544/7c9ed0d7-d5af-4054-a29d-1a304ffa544c)

이렇게 json 파일의 내용이 보이게 된다.
