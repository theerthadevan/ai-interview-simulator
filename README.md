# AI Interview Simulator

An AI-powered interview practice application built with React and the OpenAI API.  
The application helps users prepare for technical interviews by generating role-based questions and providing structured AI feedback on their answers.

## Features

- Role and experience-level based interview questions
- Real-time AI-generated interview questions
- AI evaluation of answers with score, strengths, and improvement suggestions
- Clean and modular React architecture
- Plain CSS styling (no UI frameworks)
- Secure environment variable handling for API keys
- Version controlled using Git and hosted on GitHub

## Tech Stack

- React (JavaScript)
- Vite
- OpenAI API
- Plain CSS
- Git & GitHub

## Setup Instructions

### Clone the repository

```bash
git clone https://github.com/<your-username>/ai-interview-simulator.git
cd ai-interview-simulator
```

## Install dependencies

```bash
npm install
```

## Run the application

```bash
npm run dev
```

## Open your browser at:

```bash
http://localhost:5173
```

## How the Application Works

1. The user selects a role and experience level
2. The app generates a relevant interview question using AI
3. The user submits an answer
4. The AI evaluates the response and returns structured feedback
5. Feedback is displayed with a score and improvement suggestions

All AI-related logic is isolated in a service layer to maintain a clean separation between UI and business logic.
