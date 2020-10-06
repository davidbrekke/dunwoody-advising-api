dunwoody advising API

dunwoody senior project by David Magnuson and Anders Nelson

## using yarn instead of npm
make sure to have yarn installed <br/>
    `npm install -g yarn` (might need sudo permissions)<br/>
clone repository then install dependencies<br/>
    `yarn install` (npm install equivilent)

## add and set up prisma (graphql mysql ORM)
invoke prisma cli<br/>
    `npx prisma` <br/>
init prisma in your project and create prisma folder with schema.prisma and .env file<br/>
    `npx prisma init` <br/>
in /prisma/schema.prisma change 'provider' to mysql<br/>
in /prisma/.env edit the database url to your credentials <br/>
'introspect' your db with `npx prisma introspect` which creates a prisma schema based on the db, in the schema.prisma file

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app using nodemon<br />
Open [http://localhost:4000/](http://localhost:4000/) to view it in the browser with apollo playground.

The page will reload if you make edits thx to nodemon<br />
