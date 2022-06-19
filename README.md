<div id="top"></div>

<!-- PROJECT Intro -->

<br />
<div align="center">
  <a href="https://github.com/Just-Moh-it/Pckd/stargazers">
    <img src="https://user-images.githubusercontent.com/48997634/153762074-d0aaa066-1c4e-48a2-9c08-44bc438c7a0f.png" alt="Project Banner" height="100">
  </a>

<p align="center">
    More than just a URL Shortener 😎
    <br />
    <a href="https://github.com/Just-Moh-it/Pckd"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://www.figma.com/file/CWmPgKuSWm6dvihp1XXTn1/Pckd-2?node-id=230%3A427">Design file on Figma</a>
    ·
    <a href="https://github.com/Just-Moh-it/Pckd/issues">Report Bug</a>
    ·
    <a href="https://github.com/Just-Moh-it/Pckd/issues">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

# 💁 About The Project

<a  href="https://mohityadav.codes/projects/Pckd">
    <img src="https://user-images.githubusercontent.com/48997634/157104510-21df472c-d0d9-4075-96f1-18aded5905a5.png" alt="Project Banner">
</a>
&nbsp;

Pckd is a full-customizable, open source, free-to-use, usable-design-focued, tracking-intensive URL Shortener with awesome features, and **supports**:

- Creating short urls (we call them 🔗 `pckd`s) from long ones with, or without an account
- Customize back-halfs on every 🔗 pckd
- Deploy to custom 🔌 URL and Infrastructure 💿
- Track 🕵️‍♂️ each and every click on a 🔗 pckd, and retrieve

  - 🌐 IP address (Spoof-resistant)
  - 🕸️ ISP Name
  - 🗺️ IP-Location
  - 💻 Device details like OS Version and Device Model
  - 🪟 Browser Name and including version

  It's Just crazy how powerful it is! 🤯

- Edit links after they're created
- Custom Loading/Redirecting Screen 💯
- [On Roadmap!] Quick Redirections in 150ms! 😱
- Fast, Reliable and Secure 🔐
- Secret Storage 👮 and handling using 💻 environment variables
- Built on Modern and Well-used Technologies like React, GraphQL & NodeJS
- Use your own DBMS 🥳. Pckd is compatible with MySQL, PostgreSQL, MongoDB and [many more](https://www.prisma.io/docs/reference/database-reference/supported-databases)

This project was created to be the most powerful URL shortener for the public, so no wonder it's so feature-rich

<p align="right">(<a href="#top">back to top</a>)</p>

## 📸 Screenshots

Here is a sneak peek of the application and it's visuals 😍:

<table>
    <tr>
        <td colspan="2">
            <img src="https://user-images.githubusercontent.com/48997634/153762057-3b3792ec-cfd6-4994-ba77-f973b610bac8.png" alt="Dashboard Page" />
            <br />
            <p align="center">Dashboard Page</p>
        </td>
    </tr>
    <tr>
        <td>
            <img src="https://user-images.githubusercontent.com/48997634/153762072-2c1fb032-f987-4587-938b-589886d6f02d.png" alt="Login Screen" />
            <br />
            <p align="center">Login</p></td>
        <td>
            <img src="https://user-images.githubusercontent.com/48997634/153762076-2d353ff0-1269-4d52-a5f8-155a2406c927.png" alt="Signup" />
            <br />
            <p align="center">Signup</p></td>
    </tr>
    <tr>
        <td>
            <img src="https://user-images.githubusercontent.com/48997634/153762042-58d55b0d-61cb-4e4e-a702-a46f455d7454.png" alt="Account Page" />
            <br />
            <p align="center">Account Page</p></td>
        <td>
            <img src="https://user-images.githubusercontent.com/48997634/153762075-62f5f946-93fa-4777-b663-fd8cfd6eb198.png" alt="Reset Password Screen" />
            <br />
            <p align="center">Reset Password</p></td>
    </tr>
    <tr>
        <td colspan="2">
            <img src="https://user-images.githubusercontent.com/48997634/153762070-9ce6e657-d1a3-4549-9d8b-245f1470d440.png" alt="Home Page" />
            <br />
            <p align="center">Home Page</p>
        </td>
    </tr>
</table>

Want to create your own iteration? [View the designs on Figma](https://www.figma.com/file/CWmPgKuSWm6dvihp1XXTn1/Pckd-2?node-id=230%3A427)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Motivation -->

## 🤗 Motivation

After looking at all the `aka.ms` links out there which flood windows, along with the numerous time saving been prompted to buy premium plans from `bit.ly` while shortening my URLs, the decision of having a personal URL shortener hosted on a custom domain for free caught wind. Starting out by looking at GitHub for a JavaScript-based URL shortener, no one stood out and had minimal features. So, I decided to create my own URL shortener along with the help of a few friends, and got what this repository contains.

<p align="right">(<a href="#top">back to top</a>)</p>

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
