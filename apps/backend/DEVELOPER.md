# Digital Talent Backend

The `Digital Talent` backend is created using [NestJS](https://nestjs.com/).

# Getting Started

## Prerequisites

### 1. Postgres Instance

Create a Postgres Instance

**On macOS**: For simplicity, you can use [Postgres.app](https://postgresapp.com/).

**On Linux/Windows**:
Postgress is run via docker. Create a .env file in the postgres
directory with the following variables:

POSTGRES_DB=
POSTGRES_USER=
POSTGRES_PASSWORD=

To a start Postgres server, run

docker run --name backend_postgress -p 5432:5432 --env-file=.env -d my_postgres

### 2. EventStoreDB Instance

You can set up a single-instance, insecure version of EventStoreDB by using the `docker-compose.yml` below. **Do not use this in production**.

**docker-compose.yml**

```yml
version: '3.4'

services:
  eventstore.db:
    container_name: event-store
    # Uncomment the following line for arm64
    # image: eventstore/eventstore:22.10.2-alpha-arm64v8
    # Uncomment the following line for x86-64
    # image: eventstore/eventstore:22.10.2-bionic
    environment:
      - EVENTSTORE_CLUSTER_SIZE=1
      - EVENTSTORE_RUN_PROJECTIONS=All
      - EVENTSTORE_START_STANDARD_PROJECTIONS=true
      - EVENTSTORE_EXT_TCP_PORT=1113
      - EVENTSTORE_HTTP_PORT=2113
      - EVENTSTORE_INSECURE=true
      - EVENTSTORE_ENABLE_EXTERNAL_TCP=true
      - EVENTSTORE_ENABLE_ATOM_PUB_OVER_HTTP=true
    ports:
      - '1113:1113'
      - '2113:2113'
    # Uncomment the following lines to persist data across runs
    # Not required for development where starting from 0 is preferred
    # volumes:
    #   - type: volume
    #     source: eventstore-volume-data
    #     target: /var/lib/eventstore
    #   - type: volume
    #     source: eventstore-volume-logs
    #     target: /var/log/eventstore
# Uncomment the following lines if volumes are uncommented above
# volumes:
#   eventstore-volume-data:
#   eventstore-volume-logs:
```

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
   npx -w @bcgov-dt/backend prisma migrate dev --name init
   # Run the development server
   npm -w @bcgov-dt/backend run start:dev
   ```

2. Visit `http://localhost:4000/graphql` in your browser to access the GraphQL API.
