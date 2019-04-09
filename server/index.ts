import { Calculator } from "../calculator";
import { Application } from "express-serve-static-core";

import { ExpressionSchema } from "./schemas";

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const validate = require('express-jsonschema').validate;




export class Server {
    public app: Application;

    public static create(): Server {
        return new Server();
    }

    constructor() {
        this.app = express();
        this.config();
        this.api();
    }

    private config() {
        this.app.use(bodyParser.json());
        this.app.use(morgan('tiny'));
    }

    public api() {
        this.app.get('/healthcheck', (req: any, res: any) => {
            const status = {status: "UP"};
            res.end(JSON.stringify(status));
        });

        this.app.post('/calc', validate({body: ExpressionSchema}), (req: any, res: any) => {
            const response = {
                equation: req.body.equation,
                result: Calculator.execute(req.body.equation)
            }
            res.end(JSON.stringify(response));
        })
    }

    launch(port: number) {
        console.log('Starting...');
        this.app.listen(port);
    }
}
