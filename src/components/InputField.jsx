const InputField = ({ label, type, value, onChange, placeholder, pattern }) => (
    <div className="input-group">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        pattern={pattern}
        value={value}
        onChange={onChange}
        inputMode={type === 'number' ? 'decimal' : 'text'}
      />
    </div>
  );
  
export default InputField;
  