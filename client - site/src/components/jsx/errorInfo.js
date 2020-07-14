import React from 'react';
import {Link} from "react-router-dom"
import {useDispatch} from 'react-redux'
import {cleanSearch} from '../../redux/actions'
import '../../css/cards.css'

export const  ErrorInfo=()=> {
    const dispatch=useDispatch()
    
    return (
        <div class="jumbotron jum">
            <h1 className="display-4 title"> Error Not found</h1>

            <p className="lead">
                <Link to=""><button className="btn btn-primary btn-lg" onClick={()=>{dispatch(cleanSearch())}}>Return</button></Link>
            </p>
        </div>
    )
}


