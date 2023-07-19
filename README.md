# README

## How do I get set up? ##
* Clone GIT Repository
* Install dependencies in package.json:
```bash
npm install
```
* Copy the example env file:
```bash
cp .env.example .env
```
* Setup local postgres database and put db-connection into your .env file
* To run the application:
```bash
npm run dev
```

* The project includes a database seeder in the form of a migration (see migration 'src/migrations/1655728994711-SeederGame'). To seed the database run following command:
```bash
npx typeorm-ts-node-esm migration:run -d src/data-source.ts
```

## Built with ##
* Node.js
* Express -
https://expressjs.com
* TypeORM -
https://typeorm.io
