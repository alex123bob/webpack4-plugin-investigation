import React from 'react'
import PropTypes from 'prop-types'
import {InputContext} from '../context/InputContext'

// const Input = ({label, text, type, id, value, handleChange}) => (
//     <div className="form-group">
//         <label htmlFor={label}>{text}</label>
//         <input
//             type={type}
//             className="form-control"
//             id={id}
//             value={value}
//             onChange={handleChange}
//             required
//         />
//     </div>
// )

class Input extends React.Component {
    static getDerivedStateFromProps(nextProps, prevState) {
        return prevState
    }

    constructor(props) {
        super(props)
    }

    render() {
        const {label, text, type, id, value, handleChange} = this.props
        return (
            <InputContext.Consumer>
            {context => (
                <div className="form-group" style={{backgroundColor: context.backgroundColor}}>
                    <label htmlFor={label}>{text}</label>
                    <input
                        type={type}
                        className="form-control"
                        id={id}
                        value={value}
                        onChange={handleChange}
                        required
                    />
                </div>
            )}
            </InputContext.Consumer>
        )
    }
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default Input