import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { getDishes } from "../Redux/DishesSlice";
import Dishes from "./Dishes";

const Menu = () => {
  const dispatch = useDispatch();
  const handleClearAllDishes = async () => {
    if (window.confirm("Do you want to delete all the dishes?")) {
      await axios
        .get("http://localhost:9000/dishes/clear")
        .then((res) => res.data);
      dispatch(getDishes());
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="text-blue-800 font-bold font-serif mt-4 text-5xl flex">
          <h1 className="bg-blue-700 text-white align-center">FOOD</h1> ISLAND
        </div>
        <div className="flex">
          <Link to="/adddish">
            <button className="bg-green-600 w-32 hover:bg-green-700  mr-24 text-white h-11 mt-4 font-sans font-semibold rounded-xl">
              ADD A DISH
            </button>
          </Link>
          <button
            onClick={handleClearAllDishes}
            className="bg-red-600 hover:bg-red-700 font-sans rounded-xl text-lime-50 h-11 w-16 mt-4 font-semibold rounded-md"
          >
            CLEAR
          </button>
        </div>
        <Dishes />
      </div>
    </div>
  );
};

export default Menu;
