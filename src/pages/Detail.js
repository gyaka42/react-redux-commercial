import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productsActionDetail } from "../redux/actions/products";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(productsActionDetail(id));
  }, [dispatch]);
  return (
    <div className="w-full flex justify-center space-x-5">
      <img className="w-1/3" src={product?.image} alt="" />
      <div className="w-2/3 space-y-5">
        <div className="font-bold text-xl">{product?.title}</div>
        <div className="opacity-70">{product?.description}</div>
        <div className="opacity-70">Category: {product?.category}</div>
        <div className="opacity-70">
          Rate: {product?.rating.rate} - Stock: {product?.rating.count}
        </div>
        <div className="font-bold text-xl">Price: {product?.price} TL</div>
      </div>
    </div>
  );
};

export default Detail;
