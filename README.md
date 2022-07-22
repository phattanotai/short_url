
## 😲 Built With (Tech Stack)

The following technologies were involved in the making of this project.

- [React JS](https://reactjs.org/) ⚛️ - For the frontend of the app
- [Apollo GraphQL Server v3](https://www.apollographql.com/docs/apollo-server/) 🕸️ - For querying the backend from the frontend efficiently
- [GraphQL Template By Mohit](https://github.com/Just-Moh-it/grapqhl-backend) 🧩 - Boilerplate Template used for initializing the backend
- [Prisma](https://www.prisma.io/) 💿 - The ORM used for the app
- Any 😨 relational or non-relational [database that Prisma supports](https://www.prisma.io/docs/reference/database-reference/supported-databases)
- [Redux](https://redux.js.org/) 🗺️ w/ [Redux Toolkit](https://redux-toolkit.js.org/) - For handling states across the application

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

# 🤯 Quick Start Guide

To get started with having your own instance of Pckd, follow the steps described in the following section

_**NOTE**_: Here are the [**DETAILED INSTRUCTIONS**](docs/getting-started.md)

## 🌂 Prerequisites

You will need these to be already installed:

- [NodeJS](https://nodejs.org/) 14+ and [NPM](https://npmjs.com/)
- [A supported database system](https://www.prisma.io/docs/reference/database-reference/supported-databases)

And that's it

<p align="right">(<a href="#top">back to top</a>)</p>

## 💾 Installation

Follow these steps to get started with your own instance of Pckd

1. Clone the repo and `cd` to the folder base of this repo
2. Run command `npm run init` to install all the dependencies, and initialize environment files in both folders
3. Obtain a free API key from [IP Registry](https://ipregistry.co/) (for IP address tracking info lookups)
4. Create a database named pckd in your chosen DBMS and note down the connection Username and Password
5. Manually go to both the `client` and `server` folder and fill in the values in the `.env` file
6. Open the [`server/prisma/schema.prisma`](server/prisma/schema.prisma) file and replace `postgresql` with your chosen db name.
7. Return to base directory, and run `npm run db-init` to sync database with schema.
8. To test if everything's working, run `npm run dev` and test the app
9. To promote to production, run `npm run build-client` and then `npm start`

If you have any problems following the steps, [here are the detailed instructions](docs/getting-started.md)

<p align="right">(<a href="#top">back to top</a>)</p>
