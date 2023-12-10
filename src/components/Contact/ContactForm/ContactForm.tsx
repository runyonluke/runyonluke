import React from "react";

export default function ContactForm(): React.ReactElement {
  return (
    <form
    //action
    >
      <input type="text" name="Name" placeholder="Your name" required />
      <br />
      <br />
      <input type="email" name="Email" placeholder="Email" required />
      <br />
      <br />
      <input type="email" name="Message" placeholder="Message" required />
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}
