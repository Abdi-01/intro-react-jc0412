"use client";
export default function Navbar() {
  return (
    <div id="navbar">
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 40px",
          listStyle: "none",
        }}
      >
        <li>Home</li>
        <li>About</li>
        <li>Contact US</li>
      </ul>
    </div>
  );
}
