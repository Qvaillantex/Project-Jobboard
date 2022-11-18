import React, { useEffect } from 'react';
import style from '/styles/Alert_input.module.css'
const Alert_input = ({message,setMessage,input}) => {
    
   
    
    return (
        <div className={style.alert_input}>
            {message}
        </div>
    );
};

export default Alert_input;