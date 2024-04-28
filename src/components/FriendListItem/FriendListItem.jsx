import css from "./FriendListItem.module.css";
export default function FriendListItem({
  friends: { avatar, name, isOnline },
}) {
  return (
    <div className={css.cont}>
      <img className={css.image} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      {isOnline ? (
        <p className={css.friendListItem_online}>Online</p>
      ) : (
        <p className={css.friendListItem_offline}>Offline</p>
      )}
    </div>
  );
}
