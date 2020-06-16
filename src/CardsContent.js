import React from 'react'
import staticDashboardData from "./data.js"
import CardsGen from "./CardsGen";
import MultiCard from "./MultiCard";

function CardsContent(){
    
    return(
    <div className="Top-cards">
        <div className="Cards">Reviews
        <CardsGen content={staticDashboardData.reviewsData}/>
        </div>
        <div className="Cards">Average Rating
        <CardsGen content={staticDashboardData.averageRatingData}/>
        </div>
        <div className="Cards" id="centeredCard">Sentiment Analysis
        <MultiCard content={staticDashboardData.sentimentAnalysisData}/>
        </div>
    </div>
    )
}

export default CardsContent
