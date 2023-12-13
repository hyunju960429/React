import "./App.css";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Profile
        img="https://cdn.pixabay.com/photo/2018/09/09/08/24/sunset-3664096_1280.jpg"
        name="김일동"
        title="프론트엔드 개발자"
      />
      <Profile
        img="https://cdn.pixabay.com/photo/2017/04/09/09/56/avenue-2215317_1280.jpg"
        name="김이동"
        title="백엔드 개발자"
        isNew={true}
      />
      <Profile
        img="https://cdn.pixabay.com/photo/2013/08/28/00/54/field-176602_1280.jpg"
        name="김삼동"
        title="풀스택 개발자"
      />
    </>
  );
}

export default App;
