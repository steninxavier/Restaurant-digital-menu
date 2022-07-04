import React from "react";
import Inputfield from "../components/InputField";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateDishe } from "../Redux/DishesSlice";

const EditDish = () => {
  const dispatch = useDispatch();
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

  const { id } = useParams();
  const dishData = async () => {
    const response = await axios.get(`http://localhost:9000/dishes/${id}`);
    setValues(response.data.data);
  };
  useEffect(() => {
    dishData();
  }, []);
  const handleUpdateDish =() => {
    dispatch(updateDishe(values));
    navigate("/");
  };
  return (
    <div>
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
          onClick={handleUpdateDish}
          className="bg-sky-600 hover:bg-sky-700 text-lime-50 h-11 w-16 font-semibold rounded-md"
        >
          UPDATE
        </button>
      </div>
    </div>
  );
};

export default EditDish;
