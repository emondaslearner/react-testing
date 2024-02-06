import React from 'react';

// components
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';

const TextInput = ({
    className,
    type,
    ...props
}) => {
    return (
        <Input type={type} className={`${className} outline-none bg-transparent py-2 px-[20px] border-[1px] border-gray-400`} {...props}  />
    ); 
};

TextInput.prototype = {
    className: PropTypes.string,
    type: PropTypes.string
}

export default TextInput;