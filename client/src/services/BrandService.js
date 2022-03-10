import BaseService from "./BaseService";
import { Constraints } from "../helpers";
class BrandService extends BaseService {
    constructor() {
        super(Constraints.Routes.Brand);
    }
}

export default new BrandService();
