import express from "express"
import {createConnection} from "typeorm";
import {getAppControllers} from "./controllers";

createConnection().then(connection => {
    // create and setup express app
    const app = express();

    const port = process.env.PORT || 3000;

    app.get('/', (req, res) => {
        res.send('Hello World!')
    });

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