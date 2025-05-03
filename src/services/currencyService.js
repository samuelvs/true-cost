// Unsafe but its just a test, I don't have a backend, besides its a free API
const rateApiKey = import.meta.env.VITE_UNIRATE_API_KEY;

export const getExchangeRate = async (currency) => {
  try {
    const response = await fetch(
      `https://api.unirateapi.com/api/convert?api_key=${rateApiKey}&amount=1&from=USD&to=${currency}`
    );
    const data = await response.json();
    if (data.error) {
      throw new Error(data.message);
    }
    return data.result;
  } catch (error) {
    throw new Error('Erro na conversão de moeda: ' + error.message);
  }
};
