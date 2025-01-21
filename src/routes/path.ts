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
    shoppingCart: path("/shopoing-cart"),
    category: (id: string) => path("/products/category", `${id}`),
}

export const USER_PANEL_PATH = {
    dashboard: path("/user", "dashboard")
}

export const ADMIN_PANEL_PATH = {}