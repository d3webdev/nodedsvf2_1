import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const users = this.usersRepository.list();
    const user = users.find((user) => user.id === user_id);

    if (!user) {
      throw new Error("User dont exist");
    }

    if (!user.admin) {
      throw new Error("Only admin user can to list users");
    }

    return users;
  }
}

export { ListAllUsersUseCase };
