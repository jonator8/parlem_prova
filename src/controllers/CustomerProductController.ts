import express from 'express';
import {
    getAllCustomersProducts,
    getCustomerProduct,
    deleteCustomerProduct,
    createCustomerProduct,
    updateCustomerProduct
} from "../services/CustomerProductService";

class CustomerProductController {
    public path = '/customersproducts';
    public router: express.Router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        // CRUD
        this.router.get(this.path, this.getAllCustomersProducts);
        this.router.delete(this.path+'/:id', this.deleteCustomerProduct);
        this.router.post(this.path, this.createCustomerProduct);
        this.router.put(this.path+'/:id', this.updateCustomerProduct);

        // OTHERS
        this.router.get(this.path+'/:id', this.getCustomerProduct);
    }

    public async getAllCustomersProducts (req: express.Request, res: express.Response) {
        const response = await getAllCustomersProducts().catch((err) => res.status(400).json({message: err}));
        return res.status(200).json({data: response});
    }

    public async deleteCustomerProduct(req: express.Request, res: express.Response) {
        const customer = await deleteCustomerProduct(req.params.id);
        return res.status(200).json({data: customer});
    }

    public async createCustomerProduct(req: express.Request, res: express.Response) {
        const customer = await createCustomerProduct(req.body);
        return res.status(200).json({data: customer});
    }

    public async updateCustomerProduct(req: express.Request, res: express.Response) {
        const customer = await updateCustomerProduct(req.params.id, req.body);
        return res.status(200).json({data: customer});
    }

    public async getCustomerProduct(req: express.Request, res: express.Response) {
        const customer = await getCustomerProduct(req.params.id);
        return res.status(200).json({data: customer });
    }
}

export default CustomerProductController;