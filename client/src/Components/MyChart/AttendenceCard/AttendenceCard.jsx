import React from 'react'
import './AttendenceCard.css'
import MyCharts from '../MyCharts';
import PerformanceChart from '../PerformanceChart'

const AttendenceCard = (props) => {
    return (
        <div className="att-card-wrapper">
            <div className="att-card">
                <div className="att-chart">
                    {
                        props.type === "attendence" ?
                            <>
                                <MyCharts maxHours={props.maxHours} presentHours={props.presentHours} absentHours={props.absentHours} />
                            </> :
                            <>
                                <PerformanceChart obtainedMarks={props.obtainedMarks} totalMarks={props.totalMarks} />
                            </>
                    }
                </div>

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
                        {props.type === "attendence" ?
                            <div className="att-details-left">
                                <div className="att-details-left-tilte">Present</div>
                                <div className="att-hours">{props.type === "attendence" ? <>{props.presentHours}h</> : <></>}</div>
                            </div>
                            : <></>
                        }
                        <div className="att-deatils-right">
                            <div className="att-details-left-tilte">{props.type === "attendence" ? "Absent" : "Obtained Marks"
                            }</div>
                            <div className="att-hours">{props.type === "attendence" ? <>{props.absentHours}h</> : <>{props.obtainedMarks}</>}</div>
                        </div>
                        <div className="att-deatils-right">
                            <div className="att-details-left-tilte">Percentage</div>
                            <div className="att-hours">
                                {props.type === "attendence"?<>  {((props.presentHours / (props.presentHours + props.absentHours)) * 100).toFixed(2)}%</>
                                :<>{((props.obtainedMarks/props.totalMarks)*100).toFixed(2)}%
                                </>}
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AttendenceCard;