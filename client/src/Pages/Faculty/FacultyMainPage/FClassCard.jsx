import React from 'react'
import './FacultyMainPage.css'

const FClassCard = (props) => {
  return (
    <div className="fclass-Card" style={{border:`2px solid ${props.item.color}`}}>
        <div className="fC-Card-top" style={{backgroundColor:`${props.item.color}`}}>
            <p className='m-0' >{props.item.branch}</p>
        </div>
        <div className="fC-Card-body">
            <div className="fc-card-detail">
                <p className='m-0'>Semester  {props.item.sem}</p>
                <p className='m-0'>Course Code - {props.item.courseCode}</p>
            </div>
            <div className="fc-card-detail">
                <p className='m-0'>Year - {props.item.year}</p>
                <p className='m-0'>Section - {props.item.sec}</p>
            </div>
        </div>
    </div>
  )
}

export default FClassCard;