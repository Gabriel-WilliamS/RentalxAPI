import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoiresUseCase } from "./ListCategoiresUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoiresUsecase = new ListCategoiresUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoiresUsecase
);

export { listCategoriesController };
