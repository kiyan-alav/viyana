function path(main: string, sub?: string) {
    return `${main}${sub}`
}

export const MAIN_PATH = {
    home: path("/"),
    product: path("/products"),
    productDetail: (id: string) => path("/products", `${id}`),
    contactUs: path("/contact-us"),
    blogs: path("/blogs"),
    login: path("/login"),
}

export const USER_PANEL_PATH = {
    dashboard: path("/user", "/dashboard")
}

export const ADMIN_PANEL_PATH = {}