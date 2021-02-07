import CustomerController from "./controllers/CustomerController";
import CustomerProductController from "./controllers/CustomerProductController";
import ProductController from "./controllers/ProductController";

export async function getAppControllers() {
    return [
        new CustomerController(),
        new ProductController(),
        new CustomerProductController()
    ];
}