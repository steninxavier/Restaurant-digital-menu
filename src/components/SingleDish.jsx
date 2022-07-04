import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDishes } from "../Redux/DishesSlice";

const SingleDish = () => {
  const dispatch = useDispatch();
  const dishes = useSelector((state) => state.dishes.dishes);
  const handleDeleteDish = async (id) => {
    if (window.confirm("Do you want to delete the dish?")) {
      await axios
        .delete(`http://localhost:9000/dishes/${id}`)
        .then((res) => res.data);
      dispatch(getDishes());
    }
  };
  return (
    <div className="flex justify-around flex-wrap mt-10 gap-14">
      {dishes.map((dish) => (
        <div
          key={dish._id}
          className="max-w-sm rounded overflow-hidden shadow-lg mb-16 hover:translate-y-1"
        >
          <img className="object-cover h-48 w-96" src={dish.image} alt="Dish" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{dish.name}</div>
            <p className="text-gray-700 text-base">{dish.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-bold text-gray-700 mr-2 mb-2">
              €{dish.price}
            </span>
            <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {dish.category}
            </span>
            <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {dish.availability}
            </span>
            <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {dish.waitingtime}
            </span>
            <Link to={`/editdish/${dish._id}`}>
              <button className="m-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 hover:stroke-green-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </button>
            </Link>
            <button onClick={() => handleDeleteDish(dish._id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 hover:stroke-red-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleDish;
