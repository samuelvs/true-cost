const SelectInput = ({ label, value, options, onChange }) => (
    <div className="input-group">
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        {Object.entries(options).map(([key, option]) => (
          <option key={key} value={key}>
            {key} - {option}
          </option>
        ))}
      </select>
    </div>
  );
  
  export default SelectInput;
  