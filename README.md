# Seat reservation

> **Note**
> This app is incomplete, has quite a few legacy bugs, and only has functionality for the core features of booking a seat and displaying that in the UI. 

This is a web-based application to simplify the process of booking seats in offices. It aims to provide a user-friendly solution for people to reserve their preferred seating arrangements within available offices

## Features

🪑📅 - Creation and management of seat reservations

🏛️📝 – View office specific reservations as an office manager.

👓🧑‍🦰 – View user specific reservations.

🔎💻 – Dashboard to view users upcoming reservations and make new ones.

## Run locally

Populate your .env file for the API with the `DATABASE_URL` for your Postgres database and the app with `REACT_APP_BASE_URL` directed towards the API (port 4000).

Node version of 16.7.* breaks with the version of Prisma in use with this app. Use something else!


### API

`npm install`

`npx prisma migrate dev`

`npm run dev`

### App

`npm install`

`npm start`
