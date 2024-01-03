import React from "react";
import styles from "./_about.module.scss";

/* Redux */
import { useAppDispatch } from "../../store/hooks";
import { setSelectedTab } from "../../store/RENAMEME/rootSlice";

/**
 * Contains a short personal bio
 */
export default function About(): React.ReactElement {
  const dispatch = useAppDispatch();
  // reference to section element
  const ref = React.useRef<HTMLElement>(null);

  // when you scroll to this section the tab needs to change
  // only should run when component first renders
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // get the first element, which is our section
      const entry = entries.at(0);
      // if the element is on the screen, change tab
      entry?.isIntersecting && dispatch(setSelectedTab("About"));
    });
    ref.current !== null && observer.observe(ref.current);
  });

  return (
    <section id="About" ref={ref} className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img src="grad-color-min.jpg" alt="Luke Runyon graduation" />
          <img src="wedding-color-min.jpg" alt="Luke Runyon wedding" />
        </div>
        <h1>About me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
          voluptas laborum error libero praesentium doloremque omnis sed
          blanditiis maxime? Quas molestiae accusamus voluptatibus libero
          perspiciatis voluptate iusto magni corporis accusantium ullam,
          incidunt aliquam sed odit commodi officia? Suscipit eum cupiditate,
          ducimus sed, enim tempora officiis ea
        </p>
        <p>
          quia pariatur totam mollitia consequatur nihil quo labore, amet hic
          explicabo iusto laboriosam autem eius! Velit eum rem error, aliquid ex
          sit veritatis, et voluptas laudantium magni iusto officia dolorum
          accusamus distinctio fugiat! Qui eligendi molestiae quae aliquid
          magni, laboriosam vero, veniam asperiores in saepe illo veritatis.
          Impedit id nesciunt corporis, eligendi et corrupti alias repellat
          illum vel maiores porro?
        </p>
      </div>
    </section>
  );
}
