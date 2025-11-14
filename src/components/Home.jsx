import React, { useState } from "react";
import RestaurantCard from "../shared/RestaurantCard";

const sampleRestaurants = [
  {
    id: "r1",
    name: "Spice Route",
    cuisine: "Indian • 4.5★",
    deliveryTime: "30–40 min",
    price: "₹250 for two",
    img: "https://images.unsplash.com/photo-1604908177522-3b99b4d59d2a?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2f2e0f8e5d6c10bc7f1b1a6a6b2cc4c2",
  },
  {
    id: "r2",
    name: "Green Bowl",
    cuisine: "Healthy • 4.7★",
    deliveryTime: "25–35 min",
    price: "₹300 for two",
    img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=9b5bb5cc7aebd7bba5853f2e7fd4c9d3",
  },
  {
    id: "r3",
    name: "Pizza Point",
    cuisine: "Italian • 4.3★",
    deliveryTime: "20–30 min",
    price: "₹350 for two",
    img: "https://images.unsplash.com/photo-1548365328-8b05b9c7bd3e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=d6b9a96a2d6b4b3c0b9a4ef7b6a1f7f0",
  },
  {
    id: "r4",
    name: "Burger Hub",
    cuisine: "Fast Food • 4.2★",
    deliveryTime: "15–25 min",
    price: "₹200 for two",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=7a6f2f7f1f3e5a6b7c1d2a3b4c5d6e7f",
  },
];

export default function Home() {
  const [query, setQuery] = useState("");

  const filtered = sampleRestaurants.filter(
    (r) =>
      r.name.toLowerCase().includes(query.toLowerCase()) ||
      r.cuisine.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="home container">
      <section className="hero">
        <h1>Order food from your favourite restaurants</h1>
        <p>Fast delivery • Safe contactless payments</p>

        <div className="search-row" style={{ marginTop: 12 }}>
          <input
            className="search-input"
            placeholder="Search restaurants, cuisine or dishes"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn search-btn">Search</button>
        </div>
      </section>

      <section
        className="cards-grid container"
        style={{ paddingTop: 18, paddingBottom: 40 }}
      >
        {filtered.map((r) => (
          <RestaurantCard key={r.id} {...r} />
        ))}

        {filtered.length === 0 && (
          <div className="empty">No restaurants match your search.</div>
        )}
      </section>
    </div>
  );
}
