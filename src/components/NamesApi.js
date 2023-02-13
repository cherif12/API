import axios from "axios";
import { useEffect, useState } from "react";

export const NamesApi = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setList(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(list);
  return (
    <div className="li">
      {list.map((list) => (
        <p> {list.name}</p>
      ))}
    </div>
  );
};
