import { getRepository, Repository } from "typeorm";
import { Specification } from "../../entities/Specification";
import {
  IcreateSpecificationDTO,
  ISpecificationsRepository
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Repository<Specification>;

  constructor() {
    this.specifications = getRepository(Specification);
  }
  async create({ name, description }: IcreateSpecificationDTO): Promise<void> {
    const specification = this.specifications.create({ name, description });

    await this.specifications.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.specifications.findOne({ name });

    return specification;
  }

  async list(): Promise<Specification[]> {
    return await this.specifications.find();
  }
}
export { SpecificationsRepository };
