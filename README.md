# Devs-Den-Socket-Server
 A platform for developers

## Description

A platform built with MERN stack, and utilizes third party API's. This platform enable two main different flows or implementations:

1. Developers creates profiles, find other developers to collaborate with, uses dev tools
2. Companies create profiles, find and recruite devs for their work.   


* features:
  * Developers can create their professional profiles
  * Developers can showcase their project/work 
  * Developers can find other developers to collaborate for their project
  * Developers can use compiler & docs functionality
  * Developers can create their group and invite other developers. (Direct messaging functionality also)
  * Companies can create their professional profiles
  * Companies can find developers on skill bases and communicate with them
  * Companies can share their achievements

## Note 

  * This repo is just socket server for real time chat feature of Dev's Den website. You need frontend and backend also. Check out frontend and backend of DevsDen projects -> https://github.com/HeT-Delwadiya/.

## Disclaimer

  * I have used G4G's compiler API for compiler functionality & w3cub's docs for docs functionality of DevsDen project. 

## Install

Some basic Git commands are:

```
$ git clone https://github.com/HeT-Delwadiya/Devs-Den-Socket-Server.git
$ cd project
$ npm install
```

## Setup

```
 Create .env file that include:

  * DB_URL=YOUR_MONGO_DB_URL
  * PORT=8000
  * SECRET=Token Secret for jsonwebtoken
  * BRAINTREE_MERCHANTID=YOUR_MERCHANTID
  * BRAINTREE_PUBLIC_KEY=YOUR_PUBLIC_KEY
  * BRAINTREE_PRIVATE_KEY=YOUR_PRIVATE_KEY
```


## Run the application for development

```
$ node app.js
```

## Languages & tools

- [Node](https://nodejs.org/en/)

- [Express](https://expressjs.com/)

- [Mongoose](https://mongoosejs.com/)

- [React](https://reactjs.org/)
