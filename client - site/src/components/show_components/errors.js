import React from 'react';
import '../../css/errors.css'


export const Errors =({text})=> {
    
    return (
        <div className="alert alert-danger" role="alert">
           {text}
        </div>
    )
}


