import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoiresUseCase } from "./ListCategoiresUseCase";

export default (): ListCategoriesController => {
  const categoriesRepository = new CategoriesRepository();
  const listCategoiresUsecase = new ListCategoiresUseCase(categoriesRepository);
  const listCategoriesController = new ListCategoriesController(
    listCategoiresUsecase
  );

  return listCategoriesController;
};
