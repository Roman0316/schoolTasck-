## Deployment

1. Install dependencies `npm install`

2. You must ensure that the application has access to the following environment variables:

NODE_ENV - Specifies whether the application is running in "development" or "production" mode.
API_PORT - Port number on which the API server should listen for incoming requests.
FRONTEND_URL - URL where the frontend application is hosted or served from(registration form: http://localhost:5000/api/auth/register).

#DATABASE
PGUSER - Username used to authenticate with the PostgreSQL database.
PGPASSWORD - Password used for authentication when connecting to the PostgreSQL database.
PGDATABASE - Name of the PostgreSQL database to connect to.
PGHOST - Hostname or IP address of the server where the PostgreSQL database is located.
PGPORT - Port number on which the PostgreSQL database server is listening for connections.
POSTGRES_PASSWORD - Only used in docker-compose options. Sets the password for the PostgreSQL database. Must match PGPASSWORD.

#FIRST REFERER
REFERER_FIRST_NAME
REFERER_LAST_NAME
REFERER_SUR_NAME
REFERER_EMAIL
REFERER_TELEPHONE
REFERER_PASSWORD

#JWT
JWT_ACCESS_SECRET_KEY - Secret key used for signing and verifying JWT access tokens.

3. Run database migration
4. Create the first referer
5. Start node.js application

## NPM scripts

npm start: Start node.js application
npm run dev: Start development mode (nodemon)

npm run migrate:run: Run all migrations
npm run migrate:undo: Rollback the last migration
npm run migrate:undo:all: Rollback all migrations
npm run migration:create name: Create a new migration

nom run seed:run: Create the first referer in tables 'referers'
npm run seed:create name`: Create a new referer
npm run seed:undo: Rollback the last referer
npm run seed:undo:all: Rollback all referers
