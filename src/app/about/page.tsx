"use client";
import CardArrival from "@/components/CardArrival";

export default function About() {
  const dataArrivals = [
    {
      id: 1,
      imgUrl:
        "https://images.unsplash.com/photo-1567016507665-356928ac6679?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Chair Hex",
      price: 30,
    },
    {
      id: 2,
      imgUrl:
        "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fHww",
      title: "Shofa Tera",
      price: 40,
    },
    {
      id: 3,
      imgUrl:
        "https://images.unsplash.com/photo-1567016557389-5246a1940bdc?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Shofa Wood",
      price: 45,
    },
  ];

  const printData = function () {
    const newArrayOfElement = dataArrivals.map(function (
      val: any,
      index: Number
    ) {
      return (
        <div key={val.id}>
          <CardArrival
            id={val.id}
            imgUrl={val.imgUrl}
            title={val.title}
            price={val.price}
          />
        </div>
      );
    });

    return newArrayOfElement;
  };

  return (
    <div style={{ padding: "5rem 11rem" }}>
      <p style={{ fontSize: "2rem", color: "black" }}>About Page</p>
      <div style={{ display: "flex", gap: "1rem" }}>{printData()}</div>
    </div>
  );
}
