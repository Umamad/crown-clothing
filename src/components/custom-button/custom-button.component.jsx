import React from 'react';
import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleBtn, inverted, ...restOfProps}) => (
    <button className={`${isGoogleBtn?'google-btn':''} ${inverted?'inverted':''} custom-button`}  {...restOfProps}> {children} </button>
)

export default CustomButton;