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
  return convertToPlainObject(products);
};