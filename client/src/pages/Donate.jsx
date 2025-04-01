import React, { useState } from "react";

const Donate = () => {
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("stripe");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder — replace with redirect to payment logic
    alert(`Proceeding to ${method} payment for $${amount}`);
  };

  return (
    <div className="py-20 px-4 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Make a Donation</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-lg p-8 rounded-xl">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Donation Amount (USD)</label>
          <input
            type="number"
            min="1"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Payment Method</label>
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="stripe">Credit/Debit Card (Stripe)</option>
            <option value="flutterwave">Flutterwave</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md"
        >
          Donate Now
        </button>
      </form>
    </div>
  );
};

export default Donate;
