# Crowd Funding Application

A modern and interactive crowdfunding platform designed to support meaningful campaigns and social causes. Users can explore, donate, and track their contributions to various campaigns directly through an intuitive and visually appealing interface.

The project is divided into two repositories:

*   **Client Repository:** Frontend of the application built with React.
*   **Server Repository:** Backend of the application (e.g., Node.js, MongoDB).

## Table of Contents

*   [Features](#features)
*   [Technologies Used](#technologies-used)
*   [How to Use](#how-to-use)
    *   [Client Installation](#client-installation)
    *   [Server Installation](#server-installation)
    *   [Integrating Client and Server](#integrating-client-and-server)
*   [Contributing](#contributing)
*   [License](#license)

## Features

*   **Explore Campaigns:** Discover various running campaigns aimed at creating a positive and lasting impact in society.
*   **Sort Campaigns:** Effortlessly sort campaigns by the "Minimum Donation Amount" to find those that suit your preferences.
*   **Dynamic User Interface:** Built with React, Tailwind CSS, and Daisy UI, providing a visually appealing, fast, and responsive design optimized for all screen sizes.
*   **Protected Routes:** Users need to log in to access detailed campaign information, ensuring privacy and secure access.
*   **Donation Tracking:** Logged-in users can track their donations and see the impact of their contributions.

## Technologies Used

*   **React:** A JavaScript library for building dynamic and interactive user interfaces.
*   **Tailwind CSS & Daisy UI:** Utility-first CSS framework and component library for building responsive and modern UIs with ease.
*   **MongoDB:** A NoSQL database for storing campaign and donation data (on the server).
*   **React Router:** For smooth and seamless navigation across pages.
*   **Local Storage:** Used for managing user states without requiring a backend.
*   **Node.js (Express):** For handling the backend logic and API endpoints.
*   **JWT (JSON Web Tokens):** For user authentication and protected routes.

## How to Use

### Client Installation

1.  Clone the client repository:

    ```bash
    git clone [https://github.com/abubakrsiddikl/Crowd-Funding-Client.git](https://github.com/abubakrsiddikl/Crowd-Funding-Client.git)
    ```

2.  Navigate to the client directory:

    ```bash
    cd Crowd-Funding-Client
    ```

3.  Install client dependencies:

    ```bash
    npm install
    ```

4.  Run the React development server:

    ```bash
    npm start
    ```

    The client will now be accessible at `http://localhost:3000`.

### Server Installation

1.  Clone the server repository:

    ```bash
    git clone [https://github.com/abubakrsiddikl/Crowd-Funding-Server.git](https://github.com/abubakrsiddikl/Crowd-Funding-Server.git)
    ```

2.  Navigate to the server directory:

    ```bash
    cd Crowd-Funding-Server
    ```

3.  Install server dependencies:

    ```bash
    npm install
    ```

4.  Set up the MongoDB URI and other environment variables by creating a `.env` file.

    Example `.env` file:

    ```ini
    MONGODB_URI=your_mongo_db_uri
    JWT_SECRET=your_jwt_secret
    PORT=5000
    ```

5.  Run the server:

    ```bash
    npm start
    ```

    The server will now be accessible at `http://localhost:5000`.

### Integrating Client and Server

1.  Ensure that the client and server are running simultaneously.
2.  The client will interact with the server using API calls to fetch campaigns, submit donations, and handle user authentication.
3.  You can configure the frontend to connect to the backend by setting the API URL in the client's environment variables.

    Example:

    ```javascript
    const API_URL = 'http://localhost:5000'; // Replace with your server URL if deployed
    ```

## Contributing

We welcome contributions! If you would like to contribute, follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Commit your changes (`git commit -am 'Add new feature'`).
4.  Push to the branch (`git push origin feature/your-feature-name`).
5.  Create a new pull request.

### Live Demon
[visite live link](https://fuding-auth.web.app/)