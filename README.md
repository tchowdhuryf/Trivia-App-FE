# Trivia Game App

## Overview

This project is a Trivia Game application built using React, TypeScript, and Vite.

Users can answer trivia questions across various categories and track their scores. The app connects to a backend service that manages question data, user scores, and game sessions.

## Technologies Used

- **React** (with TypeScript) - for building the user interface
- **Vite** - for fast development and build optimization
- **Storybook** - for UI component documentation and testing
- **CSS** - for styling components
- **Axios** - for retrieving backend data
- **Git & GitHub** - for version control

## Architectural Breakdown

### Frontend

- The frontend is built using React with a modular component-based structure.
- State management is handled using React hooks such as `useState` and `useContext`.
- Trivia questions and game state are managed within React components.
- The UI is styled using CSS and Storybook is used for UI component documentation.
- The app communicates with a backend API to retrieve trivia questions and submit user scores.

### Backend

- The frontend interacts with an Express-based backend that provides trivia questions and handles game state.
- Trivia questions and user scores are stored in a MongoDB database.
- API endpoints are exposed to fetch questions, track scores, and manage game sessions.
- The frontend makes `fetch` requests to these API endpoints using axios to keep the game data dynamic and up to date.
- The backend ensures data validation and handles business logic for game progression.

#### Backend Repository

The backend service for this application is available at: [Trivia-App-BE](https://github.com/tchowdhuryf/Trivia-App-BE)

## Usage Instructions

1. Clone the repository:
   ```sh
   git clone https://github.com/tchowdhuryf/Trivia-App-FE.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Trivia-App-FE
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```
5. Open the application in your browser at `http://localhost:5173/`

## Storybook Usage

To run Storybook and explore components:

```sh
npm run storybook
```

## Unsolved Problems

- Authentication is not implemented yet.

## Future Enhancements

- Implement authentication and user management
- Enhance game mechanics with additional difficulty levels and leaderboards
