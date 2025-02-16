"use server";

import { PrismaClient } from "@prisma/client";
import { LATEST_PRODUCT_LIMIT } from "../constant";
import { convertToPlainObject } from "../utils";

export async function getLatestProducts(){
  const prisma = new PrismaClient();

  const products = await prisma.product.findMany({
    take: LATEST_PRODUCT_LIMIT,
    orderBy: { createdAt: "desc" },
  });
  console.log("Before Conversion -->", products);
  console.log("After Conversion -->", convertToPlainObject(products));
  return convertToPlainObject(products);
};
