import React from 'react';
import '../../css/Dom.css'


export const DomLovedCites=({name,id,onChoose,active})=> {
   


    return (
        <div className={'LovedCity '+ (active)} onClick={()=>{onChoose(id)}}>
            <span>{name}</span>
        </div>
    )
}


