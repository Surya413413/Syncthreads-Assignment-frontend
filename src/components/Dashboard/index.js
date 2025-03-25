import React, { Component } from "react";
import Cookies from "js-cookie";
import Header from "../Header";
import "./index.css"; // Import the CSS



class Dashboard extends Component {
  state = { username: "",cards: [] };

  componentDidMount() {
    this.getCards();
  }

  getCards = async () => {
    const jwtToken = Cookies.get("jwt_token");
    if (!jwtToken) {
      console.error("No JWT Token Found! User might be logged out.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/users/dashboard", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        console.error("Error fetching dashboard:", response.status);
        return;
      }

      const data = await response.json();
      console.log("Fetched Dashboard Data:", data);
      this.setState({ username: data.username,cards: data.cards });
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  render() {
    const { username,cards } = this.state;

    return (
      <div className="dashboard-container">
        <Header />
        <h2 className="dashboard-title">Welcome, {username}!</h2>
        <p className="dashboard-subtitle">
          Explore and navigate through the available features.
        </p>
        <div className="cards-container">
          {cards.map((card) => (
            <a href="/map" key={card.id} className="card">
              <h3>{card.title}</h3>
              <p>{card.description || "Click to explore this section"}</p>
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default Dashboard;

