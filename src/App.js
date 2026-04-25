import React from "react";

export default function App() {
  const moods = [
    { title: "Recharge ⚡", desc: "Energy meals for tired days" },
    { title: "Comfort 🫶", desc: "Warm foods for low moods" },
    { title: "Focus 🧠", desc: "Study & work fuel packs" },
    { title: "Celebrate 🎉", desc: "Party kits & sharing boxes" },
    { title: "Midnight 🌙", desc: "Late-night cravings solved" },
    { title: "Budget 💸", desc: "Smart combos under ₹149" },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Bite Buzz 🍔</h1>
      <p>Your Mood. Your Food. Instantly Delivered.</p>

      <h2>Choose Your Mood</h2>

      {moods.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "10px",
          }}
        >
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}

      <h2>AI Suggestion 🤖</h2>
      <p>Feeling stressed? Try Coffee + Brownie Combo ☕🍫</p>
    </div>
  );
}
