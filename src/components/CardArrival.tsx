"use client";

interface IArrival {
  id?: number;
  imgUrl?: string;
  title?: string;
  price?: number;
}

export default function CardArrival(props: IArrival) {
  console.log("DATA FROM PARENT to CHILDREN by PROPS", props.title);
  return (
    <div style={{ width: "12rem" }}>
      <img alt="arrival" src={props.imgUrl} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontWeight: "bold",
          padding: "1rem 0rem",
        }}
      >
        <p>{props.title}</p>
        <p>${props.price}</p>
      </div>
    </div>
  );
}
