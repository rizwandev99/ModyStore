"use server";

import prisma from "@/db/prisma";
import { LATEST_PRODUCT_LIMIT } from "../constant";
import { convertToPlainObject } from "../utils";

export async function getLatestProducts() {
  const products = await prisma.product.findMany({
    take: LATEST_PRODUCT_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  return convertToPlainObject(products).map((product) => ({
    ...product,
    rating: Number(product.rating),
    price: Number(product.price),
  }));
}

export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: { slug: slug },
  });
}
