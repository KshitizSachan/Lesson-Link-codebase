import React from 'react'
import './AttendenceCard.css'
import MyCharts from '../MyCharts';

const AttendenceCard = (props) => {
    return (
        <div className="att-card-wrapper">
            <div className="att-card">
                <div className="att-chart"><MyCharts maxHours={props.maxHours} presentHours={props.presentHours} absentHours={props.absentHours}/></div>
             <div className="att-details">
                <div className="att-subject-details">
                    <div className="att-details-left">
                        <div className="att-details-left-tilte">Subject Code</div>
                        <div className="subject-code">{props.subjectCode}</div>
                    </div>
                    <div className="att-deatils-right">
                        <div className="att-details-left-tilte">Subject Name</div>
                        <div className="subject-name">{props.subjectName}</div>
                    </div>
                </div>
                <div className="att-hours-details">
                    <div className="att-details-left">
                        <div className="att-details-left-tilte">Present</div>
                        <div className="att-hours">{props.presentHours}h</div>
                    </div>
                    <div className="att-deatils-right">
                        <div className="att-details-left-tilte">Absent</div>
                        <div className="att-hours">{props.absentHours}h</div>
                    </div>
                    <div className="att-deatils-right">
                        <div className="att-details-left-tilte">Percentage</div>
                        <div className="att-hours">{(props.presentHours/(props.presentHours+props.absentHours))*100}%</div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AttendenceCard;