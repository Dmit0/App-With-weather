import React from 'react';
import {Link} from "react-router-dom"

import '../../../css/cards.css'

export const  ErrorInfo=()=> {

    
    return (
        <div className="jumbotron jum">
            <h1 className="display-4 title"> Error Not found</h1>

            <p className="lead">
                <Link to=""><button className="btn btn-primary btn-lg">Return</button></Link>
            </p>
        </div>
    )
}


