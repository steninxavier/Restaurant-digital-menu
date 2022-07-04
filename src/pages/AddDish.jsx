import React, { useState } from "react";
import Inputfield from "../components/InputField";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addDishe } from "../Redux/DishesSlice";
const AddDish = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    availability: "",
    waitingtime: "",
    image: "",
  });
  const navigate = useNavigate();
  const handleAddDish = () => {
    if (
      !values.name ||
      !values.description ||
      !values.availability ||
      !values.category ||
      !values.price ||
      !values.waitingtime ||
      !values.image
    ) {
      setError("Please fill all inputs");
    } else {
      dispatch(addDishe(values));
      navigate("/");
    }
  };
  return (
    <div>
      {error && (
        <div
          className="flex items-center justify-center bg-blue-500 text-white text-sm font-bold px-4 py-3"
          role="alert"
        >
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
          </svg>
          <p>{error}</p>
        </div>
      )}

      <div className=" flex justify-center align-center mt-7">
        <div>
          <Inputfield
            label="Name"
            type="text"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            placeholder="Enter the name of the dish"
          />
          <Inputfield
            label="Description"
            type="text"
            value={values.description}
            onChange={(e) =>
              setValues({ ...values, description: e.target.value })
            }
            placeholder="Enter a short description"
          />
          <Inputfield
            label="Price"
            type="text"
            value={values.price}
            onChange={(e) => setValues({ ...values, price: e.target.value })}
            placeholder="Enter the price"
          />
          <Inputfield
            label="Category"
            type="text"
            value={values.category}
            onChange={(e) => setValues({ ...values, category: e.target.value })}
            placeholder="Starter|Main course|Dessert|Beverage"
          />
          <Inputfield
            label="Availability"
            type="text"
            value={values.availability}
            onChange={(e) =>
              setValues({ ...values, availability: e.target.value })
            }
            placeholder="Breakfast|Dinner|Lunch|(Weekdays/-ends)"
          />
          <Inputfield
            label="Waiting time"
            type="text"
            value={values.waitingtime}
            onChange={(e) =>
              setValues({ ...values, waitingtime: e.target.value })
            }
            placeholder="Enter the waiting time"
          />
          <Inputfield
            label="Image"
            type="text"
            value={values.image}
            onChange={(e) => setValues({ ...values, image: e.target.value })}
            placeholder="Copy image address of a google Image"
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <button
          onClick={handleAddDish}
          className="bg-sky-600 hover:bg-sky-700 text-lime-50 h-11 w-16 font-semibold rounded-md"
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddDish;
