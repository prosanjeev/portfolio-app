import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Home from "./pages/Home";

function App() {

  const [data, setData] = useState(null);
  const [loding, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
        const json = await response.json();

        setData(json);
        setLoading(false)
      } catch (error) {
        setError("Unable to fetch Data")
        setLoading(false);
      }

    };
    fetchFoodData();
  }, []);

  if (loding) return <div>loding....</div>
  if (error) return <div>{error}</div>

  return (
    <Box>
     {/* <AnimatedCursor /> */}
      {data && <Home data={data} />}

    </Box>
  );
}

export default App;
