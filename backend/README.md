# Photo Tagging Game – Backend

Backend API for the [Full Stack Photo Tagging Game](https://github.com/amalk-au/full-stack-photo-tagging-game).

Built with Node.js and Express, the API handles game completion submissions and leaderboard management.

## Tech Stack

- **Node.js** – JavaScript runtime.

- **Express 5** – REST API framework.

- **JavaScript (ES Modules)** – Application logic.

- **CORS** – Cross-origin resource sharing.

- **dotenv** – Environment variable management.

- **JSON File Storage** – Leaderboard data persistence.

## Features

- REST API endpoints for application status and leaderboard operations.

- Record player names and game completion times.

- Retrieve leaderboard entries sorted by completion time.

- CORS configuration for frontend communication.

## Getting Started

### Prerequisites

- Node.js 18+

- pnpm

### Installation

Clone the repository:

```
git clone https://github.com/amalk-au/full-stack-photo-tagging-game.git

cd full-stack-photo-tagging-game/backend
```

Install dependencies:

```
pnpm install
```

### Environment Variables

Create a `.env` file in the backend directory:

```
PORT=5000
CORS_URL=http://localhost:5173
```

| Variable   | Description             | Default |
| ---------- | ----------------------- | ------- |
| `PORT`     | Server port             | `5000`  |
| `CORS_URL` | Allowed frontend origin | None    |

### Run the Server

Development mode:

```
pnpm dev
```

Production mode:

```
pnpm start
```

The API will be available at:

```
http://localhost:5000
```

## API Endpoints

| Method | Endpoint       | Description                                |
| ------ | -------------- | ------------------------------------------ |
| GET    | `/`            | Check backend status                       |
| GET    | `/leaderboard` | Retrieve leaderboard entries               |
| POST   | `/gameover`    | Submit a player's name and completion time |

### Submit Game Result

**POST**`/gameover`

```
{
  "name": "Player",
  "time": 45
}
```

### Retrieve Leaderboard

**GET**`/leaderboard`

Returns leaderboard entries ordered by completion time (fastest first).

## Project Structure

```
backend/
├── controllers/
│   └── mainController.js
├── db/
│   ├── fileOperations.js
│   └── leaderBoard.json
├── routes/
│   └── mainRouter.js
├── index.js
├── package.json
└── README.md
```

## Data Storage

Leaderboard data is stored in `db/leaderBoard.json`.

The backend uses Node.js file system operations to read and write player results.

## Deployment

The backend is deployed on Render.

**Production API:**

[https://full-stack-photo-tagging-game.onrender.com/](https://full-stack-photo-tagging-game.onrender.com/)

> The free hosting tier may introduce cold-start delays of up to 50 seconds after periods of inactivity.

## License

This project is licensed under the [GNU General Public License v3.0](../LICENSE).

## Related Projects

- [Main Repository](https://github.com/amalk-au/full-stack-photo-tagging-game)

- [Frontend](https://github.com/amalk-au/full-stack-photo-tagging-game/tree/main/frontend)

- [Live Application](https://www.amalk.au/full-stack-photo-tagging-game)

---

Developed by [amalk-au](https://github.com/amalk-au).
