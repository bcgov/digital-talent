# Digital Talent hms-api

The `Digital Talent` backend is created using [NestJS](https://nestjs.com/).

# Getting Started

Follow [Step 0](#0-docker-compose) to start the project, or follow [steps 1-3](#1-postgres-instance) to start each of the backend components individualy.

## Prerequisites

Docker must be installed and running.

### 0. Docker Compose

To run the entire backend application, create .env.docker file with the following variables:

```
NODE_ENV=

DATABASE_URL=
EVENT_STORE_URL=
KEYCLOAK_REALM_URL=

POSTGRES_DB=
POSTGRES_USER=
POSTGRES_PASSWORD=
```

Create .env files in the postgres directory, as listed in the next step. Then, run

```
docker compose up -d
```

in the backend directory to start the app.

### 1. Postgres Instance

Create a Postgres Instance

**On macOS**: For simplicity, you can use [Postgres.app](https://postgresapp.com/).

**On Linux/Windows**:
Postgress is run via docker. Create a .env file in the postgres
directory with the following variables:

```
POSTGRES_DB=
POSTGRES_USER=
POSTGRES_PASSWORD=
```

To a start Postgres server, run

```
docker build -t backend_postgress
docker run --name backend_postgress -p 5432:5432 --env-file=.env -d backend_postgress
```

### 2. EventStoreDB Instance

You can set up a single-instance, insecure version of EventStoreDB by using the `eventstore/docker-compose.yml` below. **Do not use this in production**.

After modifying the above `docker-compose.yml`, run the following command in the same folder to get started:

```
docker compose up -d
```

## Installation

0. Create a `.env` file in `apps/backend` directory and provide values for each key.

   ```
   NODE_ENV=development

   DATABASE_URL=
   EVENT_STORE_URL=
   KEYCLOAK_REALM_URL=
   ```

1. From the root of the repository, run the following commands:

   ```sh
   # Install dependencies for all projects
   npm install
   # Create and run database migrations
   npx -w @bcgov-dt/hms-api prisma migrate dev --name init
   # Run the development server
   npm -w @bcgov-dt/backend run start:dev
   ```

   to run via docker, build and run the image:

   ```
   docker build -t nestjs-app .
   docker run -p 8080:4000 nestjs-app
   ```

   **note:**:
   the .dockerignore file includes the /src directory; this is required for docker compose to work with file watching. If you would like to build the nestjs-app by itself, you can either mount the volume or remove /src from the dockerignore.

2. Visit `http://localhost:4000/graphql` in your browser to access the GraphQL API.

## GitHub for Windows pre-commit husky issues

To avoid GitHub for windows attempting to run pre-commit husky script through WSL, configure your system PATH environment variable to contain C:\Program Files\Git\bin (note: it should not be C:\Program Files\Git\cmd). Also ensure that this entry comes before %SystemRoot%\system32 as it will override bash.exe.

## To reset all data

docker-compose down
docker-compose down --volumes
docker-compose down --rmi all (optional)
docker-compose build --no-cache

## Testing

### hms-api Tests

To run all unit tests run

`npx jest`

To run end-to-end tests:

`npm run test:e2e`

For end e2e tests it is also convinient to run API with test config in parallel as well as the prisma studio:

`dotenv -e .env.test -- npm run start:dev`

`dotenv -e .env.test -- npx -w @bcgov-dt/hms-api prisma studio`
