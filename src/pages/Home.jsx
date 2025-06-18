import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { foodActions } from "../store/foodSlice";
import FoodCart from "../components/FoodCart";

const Home = () => {
  const items = useSelector((state) => state.food.items);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        dispatch(foodActions.setItems(data.recipes));
      } catch (err) {
        setError("Failed to fetch recipes.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [dispatch]);

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (error) return <div className="text-danger text-center mt-5">{error}</div>;

  return <FoodCart items={items} />;
};

export default Home;
