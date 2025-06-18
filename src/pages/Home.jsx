import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { foodActions } from "../store/foodSlice";
import FoodCart from "../components/FoodCart";

const Home = () => {
  const items = useSelector((state) => state.food.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();
      dispatch(foodActions.setItems(data.recipes));
    };
    fetchData();
  }, [dispatch]);

  return <FoodCart items={items} />;
};

export default Home;
