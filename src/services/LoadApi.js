import axios from "axios";
import { useEffect, useState } from "react";

const LoadApi = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://8jcox47hg2.execute-api.us-east-2.amazonaws.com/dev")
      .then((response) => {
        setRestaurants(response.data.body.restaurants);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return {
    restaurants,
    loading,
  };
};

export default LoadApi;
