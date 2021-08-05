import express from "express";
import * as bodyParser from 'body-parser';
import cors from "cors";
import route from "./routes";
import helmet from "helmet";
import * as dotenv from "dotenv";
import handleError from "./app/middleware/handleErrorMiddleware";

const mongoose = require('mongoose');
const ENV = process.env;

export default class AppInit {

  public app: express.Application;

  public constructor() {
    this.app = express();

    this.connectDatabase();
    this.config();
    this.initRoute();
  }

  private config(): void {
    this.app.use(cors({ origin: true }));
    this.app.use(express.json());
    this.app.use(bodyParser.urlencoded({ extended: false }))
    this.app.use(helmet())
  }

  private initRoute(): void {
    this.app.use("/api", route);
    this.app.use(handleError);
  }

  public listen(): void {
    dotenv.config();
    if (!ENV.PORT) {
      process.exit(1);
    }
    const PORT = parseInt(ENV.PORT as string, 10);

    this.app.listen(PORT, () => {
      console.log(`App listening on the port ${PORT}`);
    });
  }

  private async connectDatabase() {
    const uriConnect = `mongodb://${ENV.MONGO_HOST}:${ENV.MONGO_POST}/${ENV.MONGO_DATABASE}`;

    try {
      await mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true, useUnifiedTopology: true });
      console.log("Connect database success");
    } catch (error) {
      console.log(error, "Connect database fail !");
    }
  }
}