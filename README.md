# Syncthreads Assignment - Frontend

## 🚀 Project Overview
This is the frontend of the Syncthreads Assignment, built using **React.js** with **map integration** and **secure authentication**. It connects to a Node.js backend to fetch user-specific data and map-related information.

## 🛠️ Tech Stack
- **Frontend:** React.js, React Router, Leaflet/OpenLayers, Axios, Material UI/Bootstrap
- **Backend:** Node.js, Express.js, JWT Authentication
- **Map Integration:** Leaflet/OpenLayers
- **Deployment:** Vercel/Netlify

## 📌 Features
### 🔐 Authentication
- Secure **JWT-based login** system
- Protected routes accessible only after authentication

### 🗺️ Map Integration
- Displays **interactive map of India**
- Supports zoom and panning
- Fetches location-based data from the backend

### 📊 Dashboard
- Displays interactive **cards** with user-specific information
- Fetches and updates data dynamically using Axios
- **User-friendly UI** following Figma design

## 🚀 Getting Started
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Surya413413/Syncthreads-Assignment-frontend.git
cd Syncthreads-Assignment-frontend
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add:
```
REACT_APP_API_URL=https://your-backend-url.com
```

### 4️⃣ Start the Application
```sh
npm start
```
The frontend will be available at `http://localhost:3000`.

## 📌 Deployment
### 🖥️ Deploy to Vercel
1. Install Vercel CLI:  
   ```sh
   npm install -g vercel
   ```
2. Run the deployment command:  
   ```sh
   vercel
   ```
3. Follow the on-screen instructions to deploy.

## 🔗 API Endpoints Used
- **POST** `/login` → Authenticate user
- **GET** `/dashboard` → Fetch user-specific data
- **GET** `/map-data` → Fetch map locations

## 🛠️ How to Contribute
1. **Fork** the repository
2. **Create a feature branch** (`git checkout -b feature-branch`)
3. **Commit changes** (`git commit -m "Added new feature"`)
4. **Push to GitHub** (`git push origin feature-branch`)
5. **Create a Pull Request**

## 📜 License
This project is licensed under the **MIT License**.

---
Feel free to reach out for any issues! 🚀


