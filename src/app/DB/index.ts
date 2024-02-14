import config from "../config";
import { USER_ROLE } from "../modules/auth/auth.constant";
import { AuthModel } from "../modules/auth/auth.model";

const superManager = {
    email: 'manager@gmail.com',
    password: config.manager_password,
    username: 'manager',
    role: USER_ROLE.manager,
    status:'in-progress',
    isDeleted: false,
}

const seedSuperManager = async () => {

    const isSuperManagerExists = await AuthModel.findOne({role: USER_ROLE.manager});

    if (!isSuperManagerExists) {
        await AuthModel.create(superManager);
    }
}

export default seedSuperManager;