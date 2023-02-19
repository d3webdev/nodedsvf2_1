import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui

    const user = this.usersRepository.findById(user_id);

    try {
      if (!user) {
        throw new Error("User dont Exist");
      }
      if (user.admin) {
        throw new Error("User alredy is admin!");
      }
    } catch (error) {
      error.status = 400;
      if (!user) error.status = 404;
      throw error;
    }

    const userAdmin = this.usersRepository.turnAdmin(user);

    return userAdmin;
  }
}

export { TurnUserAdminUseCase };
