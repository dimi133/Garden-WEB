import AllProductPage from "../pages/AllProductPage";
import AllSalesPage from "../pages/AllSalesPage";
import CardPage from "../pages/CardPage";
import CategoryPage from "../pages/CategoryPage";
import CategoryProductPage from "../pages/CategoryProductPage";
import MainPage from "../pages/MainPage";



export const routes = [
    {key: 1, path: '/catalog', element: <CategoryPage />},
    {key: 2, path: '/sales', element: <AllSalesPage />},
    {key: 3, path: '/allproducts', element: <AllProductPage />},
    {key: 4, path: '/card', element: <CardPage />},
    {key: 5, path: '', element: <MainPage />},
    {key: 6, path: '/categories/:id', element: <CategoryProductPage />}

]