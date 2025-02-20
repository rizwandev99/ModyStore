export const APP_NAME = process.env.APP_NAME || "Prostore";
export const APP_DESCRIPTION =
  process.env.APP_DESCRIPTION || "An E-commerce store";
export const SERVER_URL = process.env.SERVER_URL || "http://localhost:3000";
export const LATEST_PRODUCT_LIMIT =
  Number(process.env.LATEST_PRODUCT_LIMIT) || 4;

  export const signInDefaultValues = {
    email: '',
    password: '',
  };
  