# react 에서는 데이터를 변할수 있는 값이며 값이 변할때마다 UI를 변경해 달라고(화면을 다시 그려달라) 알려야한다. 그럴때 사용하는것이 useState()이다.


```
const [num, setNum] = useState(0)
이 데이터를 변할수 있는 값 ==> num
num을 변하게 하는 함수 ==> setNum --> 함수를 이용하여 num을 변경한다.
useState(0)의 0은 num의 초기값
```



# 부분적으로 값 받기

![image](https://github.com/hyunju960429/React/assets/145514544/aabf98f8-9f9e-43fa-8b32-360ecc4e300b)



# 🍎구조분해

```
import React from "react";

const Profile = (props) => {
  /*  || --> 또는 A||B A와B 둘중에 하나라도 true이면 true
  && --> 그리고 A && B A와B 둘중에 하나라도 false 이면 false */

  // const img = props.img;
  // const name = props.name;
  // const title = props.title;
  // const title = props.isNew;
  const { img, name, title, isNew } = props;

  return (
    <div className="profile">
      <img src={img} alt="avarta"></img>
      {/* {props.isNew ? <span className="new">신입</span> : ""} */}
      {isNew && <span className="new">신입</span>}
      <h2>{name}</h2>
      <p>{title}</p>
    </div>
  );
};

export default Profile;

```
