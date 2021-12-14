# Next.js X Prisma Workshop

![Prisma   NextAuth js 2](https://user-images.githubusercontent.com/27310414/136209309-bdfba81f-0faa-4ba7-9537-23ec03425697.png)

This is a workshop that will teach you how to build a fullstack app using [Next.js](https://nextjs.org) and [Prisma](https://prisma.io). If you prefer to watch this workshop in [video format](https://youtu.be/aim8Mk-ETK0)



## Prerequisites

For this workshop, knowledge of JavaScript and React is strongly recommended, since you'll be using Next.js. Having some basic understanding of relational databases is helpful but not required. You also don't need to know TypeScript to complete this workshop.

You can check out the following resources:

- [Prisma's Data guide](https://prisma.io/dataguide)
- [The beginner's guide to React](https://egghead.io/courses/the-beginner-s-guide-to-react)



## Introduction


Next.js is a fullstack React framework, it allows you to build your frontend using React and easily set up an API. The framework also supports different data fetching strategies: you can fetch data at build time, client-side or server-side.


Prisma is a next-generation ORM for Node.js and TypeScript. It makes working with databases easy by providing you with simple workflows.

## App architecture

## Next.js



## Prisma

## What you'll be building

Throughout this workshop you'll build a feedback app where users can submit feedback.

This is what the final app will look like:



To follow along run the following commands. 

```bash
git clone -b starter https://github.com/m-abdelwahab/nextjs-prisma-workshop
cd nextjs-prisma-workshop
npm install 
npm run dev
```

This will clone the starter branch, install the dependencies and start the development server.
The app will be running at [http://localhost:3000](http://localhost:3000).

## Project structure

The starter project includes the following dependencies installed:

- [TypeScript](https://typescriptlang.org/): type-safe JavaScript
- [react-hot-toast](https://react-hot-toast.com/): library for displaying toast notifications
- [framer-motion](https://framer.com/motion): animation library for React
- [TailwindCSS](https://tailwindcss.com/): utility-first CSS framework
- [SWR](https://swr.vercel.app/): react hooks for remote data fetching
- [react-hook-form](https://react-hook-form.com/): form validation library


You'll find the following project structure

```feedback-app/
┣ data/
┃ ┗ feedback.ts
┣ pages/
┃ ┣ feedback/
┃ ┃ ┗ [id].tsx
┃ ┣ _app.tsx
┃ ┣ feedback.tsx
┃ ┗ index.tsx
┣ public/
┣ styles/
┣ .eslintrc.json
┃ ┗ tailwind.css
┣ .gitignore
┣ README.md
┣ next-env.d.ts
┣ next.config.js
┣ package-lock.json
┣ package.json
┣ postcss.config.js
┣ tailwind.config.js
┗ tsconfig.json
```

- `pages`: Next.js has file-system based routing, where each file in this directory is autimatically a route.
  -  `index.tsx` renders the page located at `http:///localhost:3000`, which contains a form If you want to add more routes, create a new JS/TS file with the name of thr route (i.e. `about.tsx`, which will create a new page located at `http://localhost:3000/about)
  -  `_app`: global `App` component that wraps around your entire app. This file is used to add global styles using TailwindCSS
  -  `feedback.tsx`: page that will display a list of user-submitted feedback. Data is hard-coded and loaded from the `data/feedback.ts` file, which contains a list of feedback items
  -  `public`: folder for serving static assets such as images, fonts, etc.
  -  `styles/tailwind.css`: set up for TailwindCSS, imported in `_app.tsx`
  -  `postcss.config.js`: postcss config file, required to use TailwindCSS
  -  `tailwind.config.js`: TailwindCSS configuration file

## Setting up the database layer using Prisma

```
npm install prisma -D
```

### Initialize Prisma in your project

```
npx prisma init
```

### Writing the database schema using Prisma


```prisma

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Feedback {
  id           String       @id @default(uuid())
  createdAt    DateTime     @default(now())
  updatedAt    DateTime     @updatedAt
  feedbackType FeedbackType
  message      String
  email        String
  name         String
}

enum FeedbackType {
  ISSUE
  IDEA
  FEEDBACK
}

```

### Creating a migration


```bash
npx prisma db push

```
### Writing a seeding script


```ts
// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.feedback.createMany({
    data: [
      {
        message: 'Lovely app',
        feedbackType: 'FEEDBACK',
        email: 'mahmoud@prisma.io',
        name: 'Mahmoud',
      },
      {
        message: 'Add dark mode',
        feedbackType: 'IDEA',
        email: 'dan@prisma.io',
        name: 'Dan',
      },
      {
        message: 'layout is broken on mobile',
        feedbackType: 'ISSUE',
        email: 'alex@prisma.io',
        name: 'Alex',
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);


```
### Using Prisma Studio to explore the database


```bash
npx prisma studio
```

### Setting up Prisma Client

```
npm install @prisma/client
```

```ts
import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

```
## Creating the API using Next.js

### `/api` folder

### `create` endpoint to submit feedback

```


```

```ts
    try {
      fetch('http://localhost:3000/api/create', {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
    } catch (error) {
      throw new Error(error);
    }
```


## Next steps

Congratulations! You just built a fullstack app using Next.js, here are some next steps you can take

### Creating a dynamic route for each feedback

### Adding Authentication to secure the `/api/feedback` endpoint and the `/feedback` page
### Deployment


### Other cool features you can build

- Filter feedback by type
- Dark mode
