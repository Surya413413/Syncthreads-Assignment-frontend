import { Link, withRouter } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "../Header"

import "./index.css"
const Home = (props) => {
  const onClickDashboard = () => {
    
    props.history.replace("/dashboard"); //  Correct in v5
    window.location.reload();
  };

  return (
    <>
    <Header/>
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">"Explore the world, one map at a time!"</h1>
       
       <p className="home-description">
  A Map Integration App allows users to view interactive maps with location markers, zoom functionality, and dynamic data loading. Users can explore different regions, with markers representing specific locations, each displaying additional details through popups. The map supports zooming and panning for better navigation. Authentication is implemented using JWT, ensuring that only authorized users can access map-related data. The backend, built with Node.js and Express, fetches and provides map data securely through API endpoints, while the frontend, developed in React.js with class-based components, uses the Leaflet library to render and manage the map interface. Future enhancements could include custom map styles, geolocation tracking, and real-time data updates.
</p>
       
        <button type="button" onClick={onClickDashboard} className="shop-now-button">
        Dashboard
          </button>
          
      </div>
     
    </div>


    </>
  );
};

export default withRouter(Home); //Use withRouter to get `history`
