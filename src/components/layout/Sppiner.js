import React,{Fragment} from 'react'
import spinner from './spinner.gif'
export default function Sppiner() {
    return (
        <Fragment>
            
            <img src={spinner} alt="loading" style={{width:'200px',margin:"auto",display:"block"}} />

        </Fragment>
    )
}
