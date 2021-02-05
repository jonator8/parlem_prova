import express from 'express';
import {
    getAllProducts,
    getProduct,
    deleteProduct,
    createProduct,
    updateProduct
} from "../services/ProductService";

class ProductController {
    public path = '/products';
    public router: express.Router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        // CRUD
        this.router.get(this.path, this.getAllProducts);
        this.router.delete(this.path+'/:id', this.deleteProduct);
        this.router.post(this.path, this.createProduct);
        this.router.put(this.path+'/:id', this.updateProduct);

        // OTHERS
        this.router.get(this.path+'/:id', this.getProduct);
    }

    public async getAllProducts (req: express.Request, res: express.Response) {
        const response = await getAllProducts().catch((err) => res.status(400).json({message: err}));
        return res.status(200).json({data: response});
    }

    public async deleteProduct(req: express.Request, res: express.Response) {
        const product = await deleteProduct(req.params.id);
        return res.status(200).json({data: product});
    }

    public async createProduct(req: express.Request, res: express.Response) {
        const product = await createProduct(req.body);
        return res.status(200).json({data: product});
    }

    public async updateProduct(req: express.Request, res: express.Response) {
        const product = await updateProduct(req.params.id, req.body);
        return res.status(200).json({data: product});
    }

    public async getProduct(req: express.Request, res: express.Response) {
        const product = await getProduct(req.params.id);
        return res.status(200).json({data: product });
    }
}

export default ProductController;