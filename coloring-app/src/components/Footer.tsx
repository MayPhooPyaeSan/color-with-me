import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        background: "#0c0c0c",
        marginTop: "4rem",
        flexWrap: "wrap",
      }}
    >
      <h6 style={{ color: "white", opacity: "0.6", cursor: "pointer" }}>
        sakuramay1210@gmail.com
      </h6>
      <h6 style={{ color: "white", opacity: "0.6", cursor: "pointer" }}>
        Copyright © {currentYear}
      </h6>
    </div>
  );
};

export default Footer;
