import React, { useEffect, useReducer, useState } from "react";
import "./style.css";

// used array destructuring
function App({ login }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then(response => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  if (loading) return <h1>Loading...!</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;

  return (
    <>
      <div>{JSON.stringify(data)}</div>
      <h6>{data.name}</h6>
      <h6>{data.location}</h6>
      <img alt={data.login} src={data.avatar_url} />
    </>
  );
}

export default App;
