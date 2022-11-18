import "./App.css";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Fragment } from "react";

function App() {
  const ApiConsumption = async () => {
    const getData = (
      await axios.get("https://jsonplaceholder.typicode.com/posts")
    ).data;
    return getData;
  };

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["mykey"],
    queryFn: ApiConsumption,
  });

  if (isError) {
    return <p>Error:{error.message}</p>;
  }
  if (isLoading) {
    return <p className="fs-5"> loading.....</p>;
  }

  return (
    <Fragment>
     
       
          <ul>
            {data.map((todo) => (
              <li key={todo.id}> {todo.title}</li>
            ))}
          </ul>
       
   
    </Fragment>
  );
}

export default App;
