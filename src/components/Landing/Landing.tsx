import React from "react";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Hello from "../Hello/Hello";
import MoreAboutMe from "../MoreAboutMe/MoreAboutMe";

export default function Landing(): React.ReactElement {
  return (
    <section>
      <HamburgerMenu />
      <Hello />
      <MoreAboutMe />
    </section>
  );
}
