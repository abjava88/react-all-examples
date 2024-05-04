import React, { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // Cleanup function (optional)
    return () => {
    };
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (data)
    return (
      <div>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>
    );
  return <div>No data available</div>;
}

export default DataFetcher;
