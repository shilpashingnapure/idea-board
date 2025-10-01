# Ideas Board Application

This is a full-stack web application that allows users to anonymously post ideas to a collaborative board and upvote their favorites. The project is fully containerized with Docker for easy setup and deployment.

---
## Architectural Choices

The application is built using a modern, decoupled architecture:
* **Decoupled Frontend/Backend:** The frontend (Next.js) is completely separate from the backend (Node.js). This allows for independent development, scaling, and deployment of each service. The frontend communicates with the backend via a REST API.
* **Containerization:** The entire stack (frontend, backend, database) is containerized using Docker. This ensures a consistent and reliable development environment for any user, eliminating the "it works on my machine" problem.
* **Relational Database:** A PostgreSQL database was chosen for its reliability and robustness in handling structured data like ideas and their upvote counts.

---
## Tech Stack

* **Frontend:** Next.js (React), TypeScript, Tailwind CSS, Axios
* **Backend:** Node.js, Express.js, TypeScript, TypeORM
* **Database:** PostgreSQL
* **Containerization:** Docker & Docker Compose

---
## Running the Application Locally

To run this project, you will need **Docker** and **Docker Compose** installed on your machine.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/shilpashingnapure/idea-board.git
    cd idea-board
    ```

2.  **Create your environment file:**
    This project uses a `.env` file to manage the database credentials for Docker Compose. To get started, copy the example file:
    ```bash
    cp .env.example .env
    ```

3.  **Run the application:**
    Use Docker Compose to build the images and start all the services with a single command.
    ```bash
    docker-compose up --build
    ```
    The `--build` flag is only needed the first time you run it or after you make code changes. For subsequent starts, you can just use `docker-compose up`.

    The application will be available at `http://localhost:3000`.

---
## API Endpoints

The backend provides the following RESTful API endpoints:

| Method  | Endpoint                 | Description                                    | Request Body (JSON)   | Success Response (200/201)       |
| :------ | :----------------------- | :--------------------------------------------- | :-------------------- | :------------------------------- |
| `GET`   | `/api/ideas`             | Fetches all ideas, sorted by most recent.      | (None)                | An array of idea objects.        |
| `POST`  | `/api/ideas`             | Creates a new idea.                            | `{ "text": "string" }`  | The newly created idea object.   |
| `PATCH` | `/api/ideas/:id/upvote` | Increments the upvote count for a single idea. | (None)                | The updated idea object.         |

---
