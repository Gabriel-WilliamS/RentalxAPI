import { Request, Response } from "express";
import { ListCategoiresUseCase } from "./ListCategoiresUseCase";

class ListCategoriesController {
  constructor(private listCategoiresUseCase: ListCategoiresUseCase) {}

  handle(request: Request, response: Response): Response {
    const categories = this.listCategoiresUseCase.execute();

    return response.status(200).json(categories);
  }
}

export { ListCategoriesController };
