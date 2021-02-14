import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} by Andrew Marks</p>
    </footer>
  );
}

export default Footer;
