function path(main: string, sub?: string) {
    return sub ? `${main}/${sub}` : main;
}

export const MAIN_PATH = {
    home: path("/"),
    products: path("/products"),
    productDetail: (id: string) => path("/products", `${id}`),
    contactUs: path("/contact-us"),
    aboutUs: path("/about-us"),
    register: path("/register"),
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
    users: path("/admin", "users"), // list - delete
    products: path("/admin", "products"), // list - delete
    productDetail: (id: string) => path("/admin", `products/${id}`), // edit
    newProduct: (id: string) => path("/admin", `products/new`), // new
    category: path("/admin", "category"), // list - delete - new - edit
    comments: path("/admin", "comments"), // list - acc/rej
    banners: path("/admin", "banners"), // list - delete - new - edit
    messages: path("/admin", "messages"), // list - delete
};
