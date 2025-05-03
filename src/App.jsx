import { useState } from "react";
import InputField from "./components/InputField";
import SelectInput from "./components/SelectInput";
import Button from "./components/Button";
import ResultCard from "./components/ResultCard";
import useCurrencyRate from "./hooks/useCurrencyRate";
import "./App.css";

// Keeping it simple, if I need to add more cities I will probably have to put it in a file or add a new API call
const cities = {
  "New York, NY": 0.08875,
  "New Jersey, NJ": 0.06625,
  "Los Angeles, CA": 0.095,
  "Miami, FL": 0.07,
  "Chicago, IL": 0.1025,
  "Houston, TX": 0.0825,
};

const currencies = {
  BRL: "Real (BRL)",
  EUR: "Euro (EUR)",
  GBP: "Libra (GBP)",
};

function App() {
  const [city, setCity] = useState("New York, NY");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [finalPrice, setFinalPrice] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState("BRL");

  const exchangeRate = useCurrencyRate(selectedCurrency);

  const convertedPrice =
    finalPrice && exchangeRate
      ? (parseFloat(finalPrice) * exchangeRate).toFixed(2)
      : null;

  const handleCalculate = () => {
    const taxRate = cities[city];
    const basePrice = discount ? parseFloat(price) * (1 - discount / 100) : parseFloat(price);
    if (isNaN(basePrice)) return;

    const taxedPrice = basePrice * (1 + taxRate);
    setFinalPrice(taxedPrice.toFixed(2));
  };

  return (
    <div className="app">
      <div className="app-header">
        <img src="/logo.svg" alt="TrueCost" className="logo" />
        <div className="app-header-text">
          <h1 className="app-header-text-title">TrueCost</h1>
          <p className="text-description">See the real price behind the tag.</p>
        </div>
      </div>

      <SelectInput
        label="City (Tax rate):"
        value={city}
        options={cities}
        onChange={(e) => setCity(e.target.value)}
      />

      <SelectInput
        label="Currency:"
        value={selectedCurrency}
        options={currencies}
        onChange={(e) => setSelectedCurrency(e.target.value)}
      />

      <InputField
        label="Product price (USD):"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Ex: 59.99"
      />

      <InputField
        label="Discount (%):"
        type="number"
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
        placeholder="Ex: 10"
      />

      <Button onClick={handleCalculate} label="Calculate" />

      {finalPrice && (
        <ResultCard title="Final price with tax" value={`$${finalPrice}`}>
          {convertedPrice && (
            <p>
              Converted to {currencies[selectedCurrency]}: <strong>{convertedPrice} {selectedCurrency}</strong>
            </p>
          )}
        </ResultCard>
      )}
    </div>
  );
}

export default App;
