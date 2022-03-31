import React, { Component } from "react";
import styles from "./UserCardClass.module.css";

class UserCardClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: "https://www.w3schools.com/howto/img_avatar.png",
      fullName: "T1000",

      subscriptions: "subscriptions",
      subscribers: "subscribers",
      likeCount: 0,
    };
  }
  liker = () => {
    const { likeCount } = this.state;
    this.setState({ likeCount: likeCount + 1 });
  };
  render() {
    const { src } = this.state;
    const { fullName } = this.state;
    const { like } = this.state;
    const { subscriptions } = this.state;
    const { subscribers } = this.state;
    const { likeCount } = this.state;
    return (
      <article className={styles.containerCards}>
        {/*  */}
        <header className={styles.headerCards}>
          <img src={src} />
          <span className={styles.headerSpan}>{fullName}</span>
        </header>
        {/*  */}
        <section className={styles.sectionCards}>
          <button className={styles.btn} onClick={this.liker}>
            &#128077;
            {likeCount}
          </button>

          <div className={styles.sectionDiv}>
            <p>{subscriptions}</p>
            <p>{subscribers}</p>
          </div>
        </section>
      </article>
    );
  }
}
export default UserCardClass;
