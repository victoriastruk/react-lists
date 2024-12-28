import { Component } from "react";
import usersArray from "./usersData";

// промалювати стилі для картки користувача згідно даних
// контакти користувача через map
// реалізувати заглушку для незавантаженого зображення користувача
// створити подію для помилки
// помилку зловити обробиком onError

export default class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [...usersArray],
    };
  }

  usersMap = (u, i) => (
    <li key={u.id}>
      <div>
        {u.firstName} {u.lastName}
      </div>
      <img src={u.profilePicture} alt="User's photo" />
      <div>
        <a href="">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
    </li>
  );
  render() {
    const { users } = this.state;
    return <ul>{users.map(this.usersMap)}</ul>;
  }
}
