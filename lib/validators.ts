import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";
import { Prisma } from "@prisma/client";

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    "Price must have exactly two decimal places"
  );

// Schema for inserting products
export const insertProductSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  slug: z.string().min(3, "Slug must be at least 3 characters"),
  category: z.string().min(3, "Category must be at least 3 characters"),
  brand: z.string().min(3, "Brand must be at least 3 characters"),
  description: z.string().min(3, "Description must be at least 3 characters"),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "Product must have at least one image"),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});

export const signInFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password length be at least 6 characters long"),
});

export const signUpFormSchema = z
  .object({
    name: z.string().min(3, "Name must be at least be 3 characters long"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(6, "Password length be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "ConfirmPassword length be at least 6 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export async function formatError(error: unknown): Promise<string> {
  if (error instanceof Error && error.name === "ZodError") {
    const zodError = error as z.ZodError;
    const fieldErrors = zodError.errors.map(
      (err) => err.message
    );
    return fieldErrors.join(".");
  } else if (
    error instanceof Error && 
    error.name === "PrismaClientKnownRequestError" &&
    (error as Prisma.PrismaClientKnownRequestError).code === "P2002"
  ) {
    const prismaError = error as Prisma.PrismaClientKnownRequestError;
    const target = prismaError.meta?.target;
    const field = Array.isArray(target) && target.length > 0 ? target[0] : "Field";

    return `${field.charAt(0).toUpperCase() + field.slice(1)}`;
  } else if (error instanceof Error) {
    return typeof error.message === "string"
      ? error.message
      : JSON.stringify(error.message);
  }
  return "An unknown error occurred";
}

// Cart Schemas
export const cartItemSchema = z.object({
  productId: z.string().min(1, 'Product is required'),
  name: z.string().min(1, 'Name is required'),
  slug: z.string().min(1, 'Slug is required'),
  qty: z.number().int().nonnegative('Quantity must be a positive number'),
  image: z.string().min(1, 'Image is required'),
  price: currency,
});

export const insertCartSchema = z.object({
  items: z.array(cartItemSchema),
  itemsPrice: currency,
  totalPrice: currency,
  shippingPrice: currency,
  taxPrice: currency,
  sessionCartId: z.string().min(1, 'Session cart id is required'),
  userId: z.string().optional().nullable(),
});
