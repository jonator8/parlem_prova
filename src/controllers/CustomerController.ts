import express from 'express';
import {
    getAllCustomers,
    getCustomer,
    deleteCustomer,
    createCustomer,
    updateCustomer,
    getCustomerProducts
} from "../services/CustomerService";

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
        this.router.get(this.path+'/:id/products', this.getCustomerProducts);
    }

    public async getAllCustomers (req: express.Request, res: express.Response) {
        const response = await getAllCustomers().catch((err) => res.status(400).json({message: err}));
        return res.status(200).json({data: response});
    }

    public async deleteCustomer(req: express.Request, res: express.Response) {
        const customer = await deleteCustomer(req.params.id).catch((err) => res.status(400).json({message: err}));
        return res.status(200).json({data: customer});
    }

    public async createCustomer(req: express.Request, res: express.Response) {
        const customer = await createCustomer(req.body).catch((err) => res.status(400).json({message: err}));
        return res.status(200).json({data: customer});
    }

    public async updateCustomer(req: express.Request, res: express.Response) {
        const customer = await updateCustomer(req.params.id, req.body).catch((err) => res.status(400).json({message: err}));
        return res.status(200).json({data: customer});
    }

    public async getCustomer(req: express.Request, res: express.Response) {
        const customer = await getCustomer(req.params.id).catch((err) => res.status(400).json({message: err}));
        return res.status(200).json({data: customer });
    }

    public async getCustomerProducts(req: express.Request, res: express.Response) {
        const customer = await getCustomerProducts(req.params.id).catch((err) => res.status(400).json({message: err}));
        return res.status(200).json({data: customer });
    }
}

export default CustomerController;