import { useState, useEffect } from 'react';
import { getExchangeRate } from '../services/currencyService';

const useCurrencyRate = (selectedCurrency) => {
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    if (!selectedCurrency) return;

    getExchangeRate(selectedCurrency)
      .then((rate) => setExchangeRate(rate))
      .catch((err) => console.error("Erro ao buscar câmbio:", err));
  }, [selectedCurrency]);

  return exchangeRate;
};

export default useCurrencyRate;
