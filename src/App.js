import React, { useEffect, useState } from "react";
import axios from "axios";

function App () {
  const [data, setData] = useState({employees: [], products:[]});

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
    .then(response => setData(response.data))
    .catch(error => 
      console.error("Error fetching data", error));
  }, []);

  return (
    <div>
      <h2> Employees</h2>
      <ul>
        {data.employees.map(emp => (
          <li key={emp.id}> {emp.name} - {emp.position}</li>
        ))}
      </ul>

      <h2> Products</h2>
      <ul>
        {data.products.map(prod => (
          <li key={prod.id}>{prod.name} - ${prod.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;