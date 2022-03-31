import styles from "./UserCard.module.css";

function UserCard(props) {
  const { fullName } = props.userInfo;
  const { src } = props.userInfo;
  const { like } = props.userInfo;
  const { subscriptions } = props.userInfo;
  const { subscribers } = props.userInfo;
  //
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <img className={styles.img} src={src} />
        <span className={styles.fullName}>{fullName}</span>
      </header>
      <section className={styles.section}>
        <div className={styles.divFooter}>
          <p>{like}</p>
          <p>{subscriptions}</p>
          <p>{subscribers}</p>
        </div>
      </section>
    </article>
  );
}

export default UserCard;
