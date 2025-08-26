import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("Crypto");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Submitting...");

    const res = await fetch("/api/addToBrevo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, interest }),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Interest:</label>
      <select value={interest} onChange={(e) => setInterest(e.target.value)}>
        <option value="Crypto">Crypto</option>
        <option value="Stocks">Stocks</option>
        <option value="ETFs">ETFs</option>
      </select>

      <button type="submit">Join Waitlist</button>
      <p>{message}</p>
    </form>
  );
}
