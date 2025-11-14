import React from "react";

export default function RestaurantCard({
  name,
  cuisine,
  deliveryTime,
  price,
  img,
}) {
  return (
    <article className="card">
      <div className="card-image">
        {img ? (
          <img src={img} alt={name} className="restaurant-img" />
        ) : (
          <div style={{ padding: 20, color: "#9aa0a6" }}>No image</div>
        )}
      </div>

      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="muted">{cuisine}</p>
        <div className="card-meta">
          <span>{deliveryTime}</span>
          <span>•</span>
          <span>{price}</span>
        </div>

        <div className="card-actions">
          <button className="btn-small">View</button>
          <button className="btn-cta">Order Now</button>
        </div>
      </div>
    </article>
  );
}
