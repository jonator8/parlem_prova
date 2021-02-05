import CustomerController from "./controllers/CustomerController";
import ProductController from "./controllers/ProductController";

export async function getAppControllers() {
    return [
        new CustomerController(),
        new ProductController()
    ];
}