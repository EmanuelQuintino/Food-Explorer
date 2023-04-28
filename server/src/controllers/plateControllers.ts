import { NextFunction, Request, Response } from "express";
import { prisma } from "../databases";
import { array, z } from "zod";
import { newAppError } from "../utils/newAppError";
import { diskStorage } from "../providers/diskStorage";

export const plateControllers = {
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const plateSchema = z.object({
        name: z.string()
          .min(3, "Nome com mínimo de 3 caracteres")
          .max(255, "Campo com tamanho máximo de 255 caracteres"),
        description: z.string()
          .min(3, "Descrição com mínimo de 3 caracteres")
          .max(255, "Campo com tamanho máximo de 255 caracteres"),
        price: z.string()
          .min(3, "Preço com mínimo de 3 carácteres")
          .max(255, "Campo com tamanho máximo de 255 caracteres"),
        category: z.string()
          .min(3, "Categoria com mínimo de 3 carácteres")
          .max(255, "Campo com tamanho máximo de 255 caracteres"),
        image: z.string()
          .min(3, "Imagem com mínimo de 3 carácteres")
          .max(255, "Campo com tamanho máximo de 255 caracteres").nullable(),
        ingredients: z.array(z.string())
      }).strict();

      const { name, description, price, category, image, ingredients } = plateSchema.parse(req.body);

      const plate = await prisma.plates.findFirst({where: {name: String(name)}});
      if (plate) throw newAppError("Prato já cadastrado", 409);
      
      await prisma.plates.create({ 
        data: {
          name, description, price, category, image,
          ingredients: {
            create: ingredients.map((ingredient: string) => ({name: ingredient}))
          }
        }
      });

      return res.status(201).json("Prato cadastrado com sucesso");
    } catch (error: any) {
      if (error.code == "P2021") return res.status(500).json("Tabela não encontrada");
      return next(error);
    };
  },

  read: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.query;
      if (id) {
        const plate = await prisma.plates.findUnique({where: {id: String(id)}});
        if (!plate) throw newAppError('Prato não encontrado', 404);

        return res.status(200).json(plate);
      } else {
        const plates = await prisma.plates.findMany();
        return res.status(200).json(plates);
      };
    } catch (error: any) {
      if (error.code == "P2021") return res.status(500).json("Tabela não encontrada");
      return next(error);
    };
  },

  update: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const plateSchema = z.object({
        name: z.string()
          .min(3, "Nome com mínimo de 3 caracteres")
          .max(255, "Campo com tamanho máximo de 255 caracteres"),
        description: z.string()
          .min(3, "Descrição com mínimo de 3 caracteres")
          .max(255, "Campo com tamanho máximo de 255 caracteres"),
        price: z.string()
          .min(3, "Preço com mínimo de 3 carácteres")
          .max(255, "Campo com tamanho máximo de 255 caracteres"),
        category: z.string()
          .min(3, "Categoria com mínimo de 3 carácteres")
          .max(255, "Campo com tamanho máximo de 255 caracteres"),
        image: z.string()
          .min(3, "Imagem com mínimo de 3 carácteres")
          .max(255, "Campo com tamanho máximo de 255 caracteres").nullable()
      }).strict();

      const { id } = req.params;      
      const { name, description, price, category, image } = plateSchema.parse(req.body);

      if (!id) throw newAppError("Por favor insirar o ID do Prato", 400);

      const plate = await prisma.plates.findUnique({where: {id: String(id)}});
      if (!plate) throw newAppError('Prato não encontrado', 404);

      await prisma.plates.update({
        data: {name, description, price, category, image},
        where: {id: String(id)}
      });

      return res.status(200).json("Prato atualizado com sucesso");
    } catch (error: any) {
      if (error.code == "P2021") return res.status(500).json("Tabela não encontrada");
      return next(error);
    };
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;      
      if (!id) throw newAppError("Por favor insirar o ID do Prato", 400);

      const plate = await prisma.plates.findUnique({where: {id: String(id)}});
      if (!plate) throw newAppError('Prato não encontrado', 404);

      await prisma.plates.delete({where: {id: String(id)}});

      return res.status(200).json('Prato deletado com sucesso');
    } catch (error: any) {
      if (error.code == "P2021") return res.status(500).json("Tabela não encontrada");
      return next(error);
    };
  },

  patch: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      if (!id) throw newAppError("Por favor insirar o ID do Prato", 400);
      
      const imageFileName = req.file?.filename;
      if (!imageFileName) throw newAppError("Por favor insirar imagem", 400);
      
      const plate = await prisma.plates.findUnique({where: {id: String(id)}});
      if (!plate) throw newAppError('Prato não encontrado', 404);

      if (plate.image) await diskStorage.deleteFile(plate.image);

      const plateFileName = await diskStorage.saveFile(imageFileName);
      plate.image = plateFileName;

      await prisma.plates.update({
        data: {image: plateFileName}, 
        where: {id: String(id)}
      });

      return res.status(200).json('Upload de imagem com sucesso');
    } catch (error: any) {
      return next(error);
    };
  },  
};
