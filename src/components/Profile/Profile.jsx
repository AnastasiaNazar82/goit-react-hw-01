import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div className={css.card}>
        <img className={css.image} src={image} alt={name} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.item_title}>Followers</span>
          <span className={css.item_amount}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.item_title}>Views</span>
          <span className={css.item_amount}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.item_title}>Likes</span>
          <span className={css.item_amount}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
