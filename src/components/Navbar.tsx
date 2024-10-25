"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <div id="navbar">
      <ul id="nav-menu-left">
        <li>
          <a href="#">shop</a>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
      </ul>
      <Link href="/">
        <img
          id="nav-logo"
          src="https://img.freepik.com/premium-vector/furniture-logo-template-design_23-2148633672.jpg"
          alt="logo"
          width="50px"
        />
      </Link>
      <ul id="nav-menu-right">
        <li>
          <a href="#">account</a>
        </li>
        <li>
          <a href="#">search</a>
        </li>
        <li>
          <a href="#">bag (0)</a>
        </li>
      </ul>
    </div>
  );
}
