import { NavLink } from "react-router-dom";

export function OrderPlaced() {
  return (
    <>
     
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height:"90vh",
          marginTop:"2rem",
          marginLeft:"1rem"
        }}
      >
        <h1>🥳 Congratulations your order is placed</h1>

        <button className="btn add-btn">
          <NavLink to="/products">Shop now </NavLink>
        </button>
      </div>
    </>
  );
}
