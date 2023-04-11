import React from 'react'
import './FeatureCard.css'
// import wer from '../../Style/Images/neonbrand-1-aA2Fadydc-unsplash.jpg'
// import wer from '../../../public/assets/images/Logo.png'
import Attendence from '../../Style/Images/attendence.svg'
import Performance from '../../Style/Images/performance.svg'
import Connect from '../../Style/Images/Connect.svg'

const SingalCard = () => {

    const FCardData = [
        {
            id: 1,
            img: Attendence,
            title: 'Track Attendance',
            description: "Students can now track their attendance more easily and hassle-freely. So no more worrying about your attendance and keep focusing on increasing your knowledge.",
            bgcolor:'#17567A',
            direction:window.innerWidth <600 ? 'column':'row',
        },
        {
            id: 2,
            img: Performance,
            title: 'View Performances',
            description: "Students can view their performance in each subject for every test that has been conducted, so they can plan their studies accordingly.",
            bgcolor:'#4EAAC7',
            direction:window.innerWidth <600 ? 'column-reverse':'row-reverse',
        },
        {
            id: 3,
            img:Connect,
            title: 'Connect and Collaborate',
            description: "Students can connect with their classmates and also students of other classes and get to know each other and collaborate with each other.",
            bgcolor:'#1C5299',
            direction:window.innerWidth <600 ? 'column':'row',
        },
    ]
    // const featureCard_Style ={
    //     // background: `url(${pdata.data.Cover_Picture}) no-repeat`,
    //     backgroundImage: url('../../Style/Images/attendance.svg'),
    //     backgroundPosition:'center',
    //     backgroundSize: "cover",
    //     windth:'10px',
    //     height:'10px'
    // }
    return (
        <>
            {
                FCardData.map((item) => {
                    return (
                        <>
                            <div className="SingalCard-wrapper" key={item.id} style={{backgroundColor:`${item.bgcolor}`}} >
                                <div className="SingalCard-content" style={{flexDirection:`${item.direction}`}}>
                                    <div className="SingalCard-left">
                                        <div className="featureCardImg" >
                                            <img src={item.img} alt="" className="featureCard-image"/>
                                        </div>
                                    </div>
                                    <div className="SingalCard-right">
                                        <div className="Ftext-heading">
                                            <p>{item.title}</p>
                                        </div>
                                        <div className="FeaturedCard-bodyContent">
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
            {/* <div className="SingalCard-wrapper">
                <div className="SingalCard-content">
                    <div className="SingalCard-left">
                        <div className="featureCard-image">
                        </div>
                    </div>
                    <div className="SingalCard-right">
                        <div className="Ftext-heading">
                            <p>{FCardData[0].title}</p>
                        </div>
                        <div className="FeaturedCard-bodyContent">
                            <p>{FCardData[0].description}</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default SingalCard;
// style={{backgroundImage:`(${item.img})`}}