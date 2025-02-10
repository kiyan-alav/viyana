function path(main: string, sub?: string) {
  return sub ? `${main}/${sub}` : main;
}

export const MAIN_PATH = {
  home: path("/"),
  products: path("/products"),
  productDetail: (id: string) => path("/products", `${id}`),
  contactUs: path("/contact-us"),
  aboutUs: path("/about-us"),
  auth: path("/auth"),
  authRegister: path("/auth/register"),
  authEmail: path("/auth/email"),
  authOtp: path("/auth/otp"),
  shoppingCart: path("/shopping-cart"),
  category: (id: string) => path("/products/category", `${id}`),
};

export const USER_PANEL_PATH = {
  orders: path("/my-account", "orders"),
  detailsAccount: path("/my-account", "details-account"),
  changePassword: path("/my-account", "change-password"),
};

export const ADMIN_PANEL_PATH = {
  dashboard: path("/admin", "dashboard"),
  users: path("/admin", "users"),
  products: path("/admin", "products"),
  editProduct: (id: string) => path("/admin", `products/${id}`),
  newProduct: path("/admin", `products/new`),
  category: path("/admin", "category"),
  comments: path("/admin", "comments"),
  banners: path("/admin", "banners"),
  messages: path("/admin", "messages"),
};
