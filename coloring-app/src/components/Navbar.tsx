import React from "react";

const Navbar = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          padding: "10px",
          marginTop: "2rem",
          fontSize: "2rem",
        }}
      >
        Welcome to Our Colorful World!
      </h1>
      <h3
        style={{
          textAlign: "center",
          marginTop: "2rem",
          fontSize: "1.5rem",
          fontFamily: "'Josefin Slab', serif",
          opacity: "0.7",
        }}
      >
        Let the colors inspire you. 🎨
      </h3>
    </div>
  );
};

export default Navbar;
