import React from "react";
import styles from "./_about.module.scss";

export default function About(): React.ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="grad-b&w-min.jpg" alt="Luke Runyon graduation" />
        <img src="wedding-b&w-min.jpg" alt="Luke Runyon wedding" />
      </div>
      <h1>About me</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro voluptas
        laborum error libero praesentium doloremque omnis sed blanditiis maxime?
        Quas molestiae accusamus voluptatibus libero perspiciatis voluptate
        iusto magni corporis accusantium ullam, incidunt aliquam sed odit
        commodi officia? Suscipit eum cupiditate, ducimus sed, enim tempora
        officiis ea
      </p>
      <p>
        quia pariatur totam mollitia consequatur nihil quo labore, amet hic
        explicabo iusto laboriosam autem eius! Velit eum rem error, aliquid ex
        sit veritatis, et voluptas laudantium magni iusto officia dolorum
        accusamus distinctio fugiat! Qui eligendi molestiae quae aliquid magni,
        laboriosam vero, veniam asperiores in saepe illo veritatis. Impedit id
        nesciunt corporis, eligendi et corrupti alias repellat illum vel maiores
        porro?
      </p>
    </div>
  );
}
