import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";

const App = () => {

  const [data, setData] = useState();
  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/posts/10")
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  },[]);

  return (
    <>
      <div className="m-16 text-amber-900">
        <Header />
        <h1>Welcome to My React App</h1>
        <p>This is a simple React application.</p>
        <h4>User Id: {data ? data.userId : "Loading..."}</h4>
        <h4>Id: {data ? data.id : "Loading..."}</h4>
        <h4>Title: {data ? data.title : "Loading..."}</h4>
        <h4>Body: {data ? data.body : "Loading..."}</h4>
        <button className="btn-primary" onClick={() => alert("Button clicked!")}>Click Me!</button>
      </div>
    </>
  );
};

export default App;
