import BaseService from "./BaseService";
import { Constraints } from "../helpers";
class ModelService extends BaseService {
    constructor() {
        super(Constraints.Routes.Model);
    }
}

export default new ModelService();
