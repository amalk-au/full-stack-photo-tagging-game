# Photo Tagging Game – Frontend

The frontend application for the [Full Stack Photo Tagging Game](https://github.com/amalk-au/full-stack-photo-tagging-game).

Built with React and Vite, the application provides an interactive photo-tagging experience where players locate hidden characters, track their completion time and submit their scores to the leaderboard.

## Tech Stack

- **React 19** – Component-based UI development.

- **React Router 7** – Client-side routing.

- **JavaScript (ES Modules)** – Application logic.

- **Vite 6** – Development server and build tooling.

- **HTML5 & CSS3** – Application structure and styling.

- **ESLint** – Code quality and linting.

- **pnpm** – Package management.

## Features

- Interactive photo-tagging gameplay.

- Character selection and coordinate validation.

- Visual markers for successfully identified characters.

- Game timer to track completion time.

- Game completion and score submission.

- Leaderboard integration with the backend API.

- Client-side navigation using React Router.

## Live Demo

Play the game:

[https://www.amalk.au/full-stack-photo-tagging-game](https://www.amalk.au/full-stack-photo-tagging-game)

**Backend API:**

[https://full-stack-photo-tagging-game.onrender.com/](https://full-stack-photo-tagging-game.onrender.com/)

## Getting Started

### Prerequisites

- Node.js 18+

- pnpm

### Installation

Clone the repository:

```
git clone https://github.com/amalk-au/full-stack-photo-tagging-game.git

cd full-stack-photo-tagging-game/frontend
```

Install dependencies:

```
pnpm install
```

### Environment Configuration

Configure the backend API URL in the frontend wherever the API base URL is defined.

The production backend is available at:

```
https://full-stack-photo-tagging-game.onrender.com
```

For local development, use:

```
http://localhost:5000
```

### Run the Development Server

```
pnpm dev
```

Vite will start the development server, typically at:

```
http://localhost:5173
```

## Available Scripts

| Command        | Description                            |
| -------------- | -------------------------------------- |
| `pnpm dev`     | Start the development server           |
| `pnpm build`   | Build the application for production   |
| `pnpm preview` | Preview the production build           |
| `pnpm lint`    | Run ESLint                             |
| `pnpm deploy`  | Deploy the application to GitHub Pages |

## Project Structure

```
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Deployment

The frontend is hosted on GitHub Pages.

To deploy:

```
pnpm install

pnpm run build

pnpm run deploy
```

The Vite configuration includes the GitHub Pages base path:

```
base: "/full-stack-photo-tagging-game/"
```

This ensures application assets and routes resolve correctly when deployed under the repository's GitHub Pages path.

**Live Application:**

[https://www.amalk.au/full-stack-photo-tagging-game](https://www.amalk.au/full-stack-photo-tagging-game)

## License

This project is licensed under the [GNU General Public License v3.0](../LICENSE).

## Related Projects

- [Main Repository](https://github.com/amalk-au/full-stack-photo-tagging-game)

- [Backend](https://github.com/amalk-au/full-stack-photo-tagging-game/tree/main/backend)

- [Live Application](https://amalk.au/full-stack-photo-tagging-game)

---

Developed by [amalk-au](https://github.com/amalk-au).
