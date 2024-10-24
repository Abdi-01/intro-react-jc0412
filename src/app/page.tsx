"use client"; // render page di bclient browser
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="background-red">
        <h1 style={{ fontSize: "72px" }}>Intro NextJS</h1>
      </div>
      <input type="text" />
      <img />
    </div>
  );
}
