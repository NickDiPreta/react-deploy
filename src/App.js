import React from "react";
import "./styles.css";
import staticDashboardData from "./data.js"
import DataItem from "./dataItem.js"

export default function App() {
  return (
    <div className="App-container">
      <nav>
      {staticDashboardData.navItems.map(item=> <li>{item}</li>)}
      </nav>
      <div className="Top-cards">
          <div className="Cards">Reviews
          <p>{staticDashboardData.reviewsData}</p>
          </div>
          <div className="Cards">Average Rating
          <p>{staticDashboardData.averageRatingData}</p>
          </div>
          <div className="Cards" id="centeredCard">Sentiment Analysis
          <p>{staticDashboardData.sentimentAnalysisData.map(item=> <li>${item}</li>) }</p>
          </div>
      </div>
      <div className="Bot">Website Visitors
      <p>{staticDashboardData.websiteVisitorsData}</p></div>
    </div>
  );
}
