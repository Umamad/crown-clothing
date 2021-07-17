import React from 'react';
import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleBtn, ...restOfProps}) => (
    <button className={`${isGoogleBtn?'google-btn':''} custom-button`} {...restOfProps}> {children} </button>
)

export default CustomButton;