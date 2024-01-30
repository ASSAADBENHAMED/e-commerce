import React, { useEffect, useState } from "react";
import { getProducts } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import ProductAdd from "../components/ProductAdd";
import "../Styles/AdminDashbord.css";

const AdminDashboard = () => {
  const productList = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch, isUpdate]);

  console.log(productList);

  return (
    <div>
      <div>
        <ProductAdd isUpdate={isUpdate} setIsUpdate={setIsUpdate} />
      </div>
      <br />
      <div className="dashbord">
        {productList.productsList.map((el, i) => (
          <ProductCard
            key={i}
            product={el}
            isUpdate={isUpdate}
            setIsUpdate={setIsUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
