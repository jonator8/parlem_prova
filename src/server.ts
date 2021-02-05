import express from "express"
import {createConnection} from "typeorm";

createConnection().then(connection => {
    // create and setup express app
    const app = express();

    const port = 3000;
    app.get('/', (req, res) => {
        res.send('Hello World!')
    });

// start express server
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    });
});