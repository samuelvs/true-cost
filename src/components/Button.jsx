const Button = ({ onClick, label, type = "button" }) => (
    <button type={type} onClick={onClick}>
      {label}
    </button>
  );
  
  export default Button;
  