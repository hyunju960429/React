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
