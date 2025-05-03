const ResultCard = ({ title, value, children }) => (
  <div className="result">
    <p>
      {title}: <strong>{value}</strong>
    </p>
    {children}
  </div>
);

export default ResultCard;
