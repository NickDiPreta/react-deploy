import React from "react";
import "./styles.css";
import staticDashboardData from "./data.js"
import NavBar from "./nav"
import CardsContent from "./CardsContent"
import BottomContent from "./BottomContent"

export default function App() {
  return (
    <div className="App-container">
      <NavBar content={staticDashboardData.navItems}/>
      <CardsContent />
      <BottomContent content={staticDashboardData.websiteVisitorsData} />
    </div>
  );
}
