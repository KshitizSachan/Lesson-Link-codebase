import React from 'react'
import './FacultyMainPage.css'

const FClassCard = (props) => {
  return (
    <div className="fclass-Card" style={{border:`2px solid ${props.color}`}}>
        <div className="fC-Card-top" style={{backgroundColor:`${props.color}`}}>
            <p className='m-0' >{props.branch}</p>
        </div>
        <div className="fC-Card-body">
            <div className="fc-card-detail">
                <p className='m-0'>Semester  {props.sem}</p>
                <p className='m-0'>Course Code - {props.courseCode}</p>
            </div>
            <div className="fc-card-detail">
                <p className='m-0'>Year - {props.year}</p>
                <p className='m-0'>Section - {props.sec}</p>
            </div>
        </div>
    </div>
  )
}

export default FClassCard;