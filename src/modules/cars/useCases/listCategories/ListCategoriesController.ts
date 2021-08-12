import { Request, Response } from "express";
import { ListCategoiresUseCase } from "./ListCategoiresUseCase";

class ListCategoriesController {
  constructor(private listCategoiresUseCase: ListCategoiresUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const categories = await this.listCategoiresUseCase.execute();

    return response.status(200).json(categories);
  }
}

export { ListCategoriesController };
