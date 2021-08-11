import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

class ListSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute(): Specification[] {
    const specification = this.specificationsRepository.list();

    console.log(specification);
    return specification;
  }
}

export { ListSpecificationUseCase };
