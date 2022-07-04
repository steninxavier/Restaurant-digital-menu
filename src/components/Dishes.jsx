import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDishes } from "../Redux/DishesSlice";
import SingleDish from "./SingleDish";

const Dishes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDishes());
  }, []);
  return (
    <div>
      <SingleDish />
    </div>
  );
};

export default Dishes;
