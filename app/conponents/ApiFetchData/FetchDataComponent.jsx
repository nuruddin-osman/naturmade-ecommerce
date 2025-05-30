import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setFetchProductArr } from "@/app/featurs/toggleMenu/menuSlice";

const FetchDataComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products?limit=200&skip=100"
        );
        const data = response.data.products;
        dispatch(setFetchProductArr(data));
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return <div></div>;
};

export default FetchDataComponent;
