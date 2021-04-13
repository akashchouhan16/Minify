# URL-Minifier

**(1.0.0)**

A Node application to minify the URL links and save the minified urls to the MangoDb Database.

### Dependencies

- **shortid**
- **express**
- **mongoose**
- **ejs**

---

> The short Url and the number of visits is fetched from the database, hence [Mongodb](https://www.mongodb.com/ "Visit MongoDB") must be installed onto the system and configured in order to run this application.

---

## How To Run the application

- **Clone this repo**
- **Install Dependencies**
  ```Node
    npm install
  ```
- **Create a `.env` file and save the connection URL for DB**
  ```
  MONGO_URI=<DB Connection URI>
  ```
- **Run the developement server**
  ```Node
    npm run dev
  ```
- **Visit **http://localhost:5000** on your browser.**

## Preview

![application preview](urlshortener-prerview.png)

## [Application Info](https://github.com/akashchouhan16/Url-Shortener#readme "Url-Minifier")

### Version

[1.0.0](https://github.com/akashchouhan16/Url-Shortener#readme "Application version")

### License

[MIT License](./LICENSE "View License")
