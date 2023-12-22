
# input의 값이 바뀌어도 App.js는 다시 실행되지 않는다 --> 이런것을 react로 부터 제어받지 않는다고 해서 uncontroled component라고 한다.

# input안의 내용이 useState의 상태값과 매칭이 되도록 맞추어 주어야한다.

# input 태그에서는 onChange = {(e)=>{setName(e.target.value)}}
# e ==> 이벤트를 받음. 상태의 값을 변경하기 위해 setName 함수를 사용하며
# 사용자가 입력한 값을 상태값으로 적용하기위해 e.target.value를 사용한다.

![image](https://github.com/hyunju960429/React/assets/145514544/77cb0587-b762-434c-953e-2b2882c5e4cf)


# <form onSubmit={(e) => {e.preventDefault()}}>
# form은 새로고침이 일어나는 속성을 가지고 있다. 그래서 이를 막기위해 e.preventDefault()를 사용함
