import logo from "./logo.svg";
import "./App.css";
import UserCard from "./Components/UserCard";
import UserCardClass from "./Components/UserCadrClass";

function App() {
  return (
    <>
      <UserCard
        userInfo={{
          fullName: "Jon Conor",
          src: "https://www.w3schools.com/howto/img_avatar.png",
          like: "Like",
          subscriptions: "Subscriptions", //подписки
          subscribers: "Subscribers",
        }}
      />
      <UserCardClass
        userInfo={{
          fullName: "Jon Conor",
          src: "https://www.w3schools.com/howto/img_avatar.png",
          like: "Like",
          subscriptions: "Subscriptions", //подписки
          subscribers: "Subscribers",
        }}
      />
    </>
  );
}

export default App;
