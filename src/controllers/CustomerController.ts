import express from 'express';

class CustomerController {
    public path = '/customers';
    public router: express.Router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        // CRUD
        this.router.get(this.path, this.getAllCustomers);
        this.router.delete(this.path+'/:id', this.deleteCustomer);
        this.router.post(this.path, this.createCustomer);
        this.router.put(this.path+'/:id', this.updateCustomer);

        // OTHERS
        this.router.get(this.path+'/:id', this.getCustomer);
    }

    public async getAllCustomers (req: express.Request, res: express.Response) {
        // const response = await getAllCustomers().catch((err) => res.status(400).json({message: err}));
        return res.status(200).json({data: {message:"hi"}});
    }

    public async deleteCustomer(req: express.Request, res: express.Response) {
        // const Customer = await deleteCustomer(req.params.id);
        // return res.status(200).json({data: Customer});
    }

    public async createCustomer(req: express.Request, res: express.Response) {
        // const customer = await createCustomer(req.body);
        // return res.status(200).json({data: customer});
    }

    public async updateCustomer(req: express.Request, res: express.Response) {
        // const customer = await updateCustomer(req.params.id, req.body);
        // return res.status(200).json({data: customer});
    }

    public async getCustomer(req: express.Request, res: express.Response) {
        // const customer = await getCustomer(req.params.id);
        // return res.status(200).json({data: customer });
    }
}

export default CustomerController;