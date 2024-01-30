import {React,useEffect} from 'react';
import { getProducts } from '../actions/productActions';
import { useDispatch, useSelector } from "react-redux";
import ProductCardAff from './ProductCardAff';
import '../Styles/AdminDashbord.css'
const ProductList = () => {

    const productList = useSelector((state) => state.product);

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    }, [dispatch]);
      console.log(productList);
  return (
    <div className='dashbord'>
      {productList.productsList.map((el, i) => (
        <ProductCardAff key={i} product={el} />
      ))}
    </div>
  );
}

export default ProductList
