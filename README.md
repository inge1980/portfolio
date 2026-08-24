# Description

This is a portfolio website for projects, skillsets and contactinfo.

## Used tools and technologies

Created using Reactjs, react-bootstrap, emailjs and ReCAPTCHA.

## Demo

Live view by clicking the link: https://inge1980.github.io/portfolio/

---

# How to Run

## 1. Install dependancies

Run package manager install:

    npm install

---

## 2. Run the application locally

Start the React development server:

    npm start

The application will normally be available at:

    http://localhost:3000

---

## 3. Build the application

Create a production build:

    npm run build

The production files are generated in the `build` directory.

---

## 4. Deploy to GitHub Pages

This project uses `gh-pages` to deploy the React application to GitHub Pages.

The `package.json` contains:

    "homepage": "https://inge1980.github.io/portfolio/"

and the following deployment scripts:

    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"

Run the deployment with:

    npm run deploy

The `predeploy` script automatically runs `npm run build` before `gh-pages` publishes the `build` directory.

The application is available at:

    https://inge1980.github.io/portfolio/

---

## 5. Deploy with a custom commit message

Deploy with a custom Git commit message:

    npm run deploy -- -m "Deploy React app to GitHub Pages"

This is equivalent to running the normal deployment command, but passes the commit message to `gh-pages`.

For a normal deployment, `npm run deploy` is sufficient.

---