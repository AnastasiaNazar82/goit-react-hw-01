import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendlist}>
      {friends.map((friend) => {
        return (
          <li className={css.friendlist_cont} key={friend.id}>
            <FriendListItem friends={friend} />
          </li>
        );
      })}
    </ul>
  );
}
