"use client"; // render page di bclient browser
import Banner from "@/components/Banner";
import CardArrival from "@/components/CardArrival";
// import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Banner />
      <section style={{ padding: "20vh 10vw" }}>
        <p
          style={{
            textAlign: "center",
            fontWeight: "bold",
            borderBottom: "2px solid black",
            width: "fit-content",
            margin: "auto",
          }}
        >
          kos is a collection of modern,
          <br />
          handmade ceramics, inspired by the
          <br />
          nature's unique shapes and tones.
        </p>
      </section>
      <section id="arrivals" style={{ padding: "10vh 10vw" }}>
        <h1 style={{ fontSize: "x-large", fontWeight: "bold" }}>
          new arrivals
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            columnGap: "15px",
            margin: "3rem 0rem",
          }}
        >
          <CardArrival />
          <CardArrival />
          <CardArrival />
          <CardArrival />
        </div>
      </section>
      <section
        id="thumbnail"
        style={{
          padding: "10vh 10vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "3rem",
        }}
      >
        <div style={{ flex: 1 }}>
          <img
            alt="thumbnail"
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontWeight: "bold",
            }}
          >
            kos is a collection of modern,
            <br />
            handmade ceramics, inspired by the
            <br />
            nature's unique shapes and tones.
          </p>
          <p
            style={{
              fontWeight: "bold",
              borderBottom: "2px solid black",
              width: "fit-content",
              cursor: "pointer",
              marginTop: "4rem",
            }}
          >
            our story
          </p>
        </div>
      </section>
      <section id="arrivals" style={{ padding: "10vh 10vw" }}>
        <h1 style={{ fontSize: "x-large", fontWeight: "bold" }}>
          all collections
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gridTemplateRows: "repeat(2, 10rem)",
            columnGap: "2rem",
            rowGap: "1rem",
            margin: "3rem 0rem",
          }}
        >
          <div
            style={{
              gridRow: "1/3",
              overflow: "hidden",
            }}
          >
            <img
              alt="thumbnail"
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div
            style={{
              overflow: "hidden",
            }}
          >
            <img
              alt="thumbnail"
              src="https://plus.unsplash.com/premium_photo-1673548917423-073963e7afc9?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{ objectFit: "cover", objectPosition: "0rem -3rem" }}
            />
          </div>
          <div
            style={{
              overflow: "hidden",
            }}
          >
            <img
              alt="thumbnail"
              src="https://images.unsplash.com/photo-1468174482686-1047396f13b3?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{ objectFit: "cover", objectPosition: "0rem -3rem" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
