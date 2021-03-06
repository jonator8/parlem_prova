import express from "express"
import bodyParser from "body-parser";
import cors from 'cors';
import {createConnection} from "typeorm";
import {getAppControllers} from "./controllers";

createConnection().then(connection => {
    // create and setup express app
    const app = express();

    // parse application/json
    app.use(bodyParser.json());

    // use cors to accept localhost origin (only on dev mode)
    app.use(cors());

    const port = process.env.PORT || 3000;

    getAppControllers().then((controllers) => {
        controllers.map((controller) => {
            app.use('/api/v1/', controller.router);
        });
    });

    // start express server
    app.listen(Number(port), () => {
        console.log(`Example app listening at http://localhost:${port}`)
    });
});