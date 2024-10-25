"use client";
export default function Banner() {
  return (
    <div id="banner">
      <img
        src="https://plus.unsplash.com/premium_photo-1661777938520-110b62a5537f?q=80&w=3431&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="banner-img-livingroom"
        id="banner-img"
        width="100%"
      />
      <div id="text-banner">
        <h1>new</h1>
        <h1>collection</h1>
        <a style={{ borderBottom: "2px solid black", paddingBottom: 3 }}>
          shop
        </a>
      </div>
    </div>
  );
}
