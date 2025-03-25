import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Cookies from "js-cookie";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import Header from "../Header"

class MapView extends Component {
    state = {
        center: [20.5937, 78.9629], // Default center (India)
        zoom: 5,
        markers: [], // Store marker locations
    }

  componentDidMount() {
this.getMaps();
  }

  getMaps = async() => {
   
      const jwtToken = Cookies.get("jwt_token");
      console.log("🔹 JWT Token Retrieved:", jwtToken);  // Debugging
  
      if (!jwtToken) {
          console.error("No JWT Token Found! User might be logged out.");
          return;
      }
      const url = "http://localhost:3000/users/map";
      const options = {
          method: "GET",
          headers: {
              Authorization: `Bearer ${jwtToken}`,
              "Content-Type": "application/json",
          },
         
      };
  
      try {
          const response = await fetch(url, options);
          console.log("🔹 Response Statussss:", response.status);
  
          // Properly handle non-JSON responses
          if (!response.ok) {
              const errorText = await response.text(); // Read response as text
              try {
                  const errorJson = JSON.parse(errorText); // Try parsing as JSON
                  console.error("Error fetching dashboard:", errorJson.error);
              } catch {
                  console.error("Server Error (Non-JSON Response):", errorText);
              }
              return;
          }
          const data = await response.json();
          console.log("Fetched Dashboard Dataaaaaa:", data);
          this.setState({ center: data.center || [20.5937, 78.9629], // Fallback to India
            zoom: data.zoom || 5,
            markers: data.markers || [], });
      } catch (error) {
          console.error("Fetch Error:", error);
      }
  };
    
  render() {
    const { center, zoom, markers } = this.state;
    return (
<>
<Header/>
       <div className="map-container" >
        <h2>Interactive Map</h2>
        <MapContainer center={center} zoom={zoom} style={{ height: "500px", width: "100%" }}>
          {/* Tile Layer (Map Background) */}
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {/* Markers for each location */}
          {markers.map((marker, index) => (
            <Marker key={index} position={[marker.lat, marker.lng]}>
              <Popup>{marker.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
</>
      
    )
  }
}

export default MapView;



