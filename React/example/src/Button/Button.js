import './Button.css'

const Button = ({ children, functionWhenClick }) => (
  <button className="button" onClick={functionWhenClick}>
    {children}
  </button>
)

export default Button
