import { insertProductSchema } from "@/lib/validators";
import { z } from "zod";

export type Product = Omit<z.infer<typeof insertProductSchema>, "price"> & {
  id: string;
  rating: number;
  price: number;
  createdAt: Date;
};
