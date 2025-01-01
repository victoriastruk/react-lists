import { Component } from "react";
import usersArray from "./usersData";
import style from "./UsersList.module.css";

export default class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [...usersArray],
    };
  }
  handleImageError = (event) => {
    event.target.style.display = "none";
    event.target.nextSibling.style.display = "flex";
  };
  usersMap = (u, i) => (
    <li className={style.userCard} key={u.id}>
      <div className={style.imageWrapper}>
        <img
          className={style.userPhoto}
          src={u.profilePicture}
          alt="User's photo"
          onError={this.handleImageError}
        />
        <div className={style.imagePlaceholder}>
          <p>
            Image<br></br> not available
          </p>
        </div>
      </div>
      <div className={style.userName}>
        {u.firstName} {u.lastName}
      </div>
      <div className={style.socialLinks}>
        {u.contacts.map((contact, index) => {
          const icons = ["fa-facebook", "fa-twitter", "fa-instagram"];

          return (
            <a
              key={index}
              className={style.socialLink}
              href={contact}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`fa-brands ${icons[index]}`}></i>
            </a>
          );
        })}
      </div>
    </li>
  );
  render() {
    const { users } = this.state;
    return (
      <>
        <h1 className={style.title}>Users List</h1>
        <ul className={style.userList}>{users.map(this.usersMap)}</ul>;
      </>
    );
  }
}
