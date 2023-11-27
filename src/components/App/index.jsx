import Nav from "../Nav";
import { Routes, Route } from "react-router-dom"
import AllProductPage from "../pages/AllProductPage";
import CardPage from "../pages/CardPage";
import CategoryPage from "../pages/CategoryPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllProducts } from "../../store/slice/allProductsSlice";
import AllSalesPage from "../pages/AllSalesPage";
import MainPage from "../pages/MainPage";
import { fetchCategory } from "../../store/slice/categorySlice";
import Contact from "../Contact";
import CategoryProductPage from "../pages/CategoryProductPage";
import SingleProductPage from "../pages/SingleProductPage";
import NotFound from "../NotFound";
import { ToastContainer } from "react-toastify";


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(fetchCategory())
  },[dispatch])

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/allproducts' element={<AllProductPage />} />
        <Route path='/catalog' element={<CategoryPage />} />
        <Route path='/card' element={<CardPage />} />
        <Route path='/sales' element={<AllSalesPage />} />
        <Route path='' element={<MainPage />} />
        <Route path='/categories/:id' element={<CategoryProductPage />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/allproducts/:id' element={<SingleProductPage />} />

      </Routes>
      <Contact />
      <ToastContainer />
    </>
  );
}

export default App;
