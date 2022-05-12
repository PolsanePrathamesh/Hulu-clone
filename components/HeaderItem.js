import styles from "../styles/HeaderItem.module.css";

function HeaderItem({ title, Icon }) {
  return (
    <div className={styles.group}>
      <Icon className={styles.animation_bounce} />
      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default HeaderItem;
