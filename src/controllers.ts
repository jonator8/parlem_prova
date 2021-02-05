import CustomerController from "./controllers/CustomerController";

export async function getAppControllers() {
    return [
        new CustomerController()
    ];
}