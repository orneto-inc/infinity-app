import React from 'react'
import './styles.css'

const BtnGroup = () =>{
    return(
        <div className='btn-grp'>
            <button className='btn btn-primary'>Create Note</button>
            <button className='btn btn-secondary'>Share Note</button>
        </div>
    )
}
export default BtnGroup;