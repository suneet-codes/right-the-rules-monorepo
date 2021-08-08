import PropTypes from 'prop-types'
import buttonStyles from './Button.styles'

const Button = ({ children }) => (
  <button css={buttonStyles} type='button'>
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Button
