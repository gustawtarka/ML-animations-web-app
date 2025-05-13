import express from 'express';
import logger from "./utils/logger.js";
import routes from './routes.js'; 
import { create } from 'express-handlebars';
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());
const handlebars = create({
  extname: ".hbs",
  layoutsDir: 'views/layouts',
});

app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");

app.use("/", routes);

app.listen(port, () => logger.info(`Your app is listening on port ${port}`));
