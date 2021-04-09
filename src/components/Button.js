import PropTypes from 'prop-types'


const Button = ({ btnclass, text, color, onClick, icon }) => {

    return (
        <div
            className={btnclass}
            onClick={onClick}
            style={{ backgroundColor: color }}
        >
            {text}
            {icon}
        </div>
    )
}

Button.defaultProps = {
    btnclass: 'btn',
    color: 'white',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}



export default Button
