import React, { useState, useEffect } from "react";
import AComplaints from "../../../components/AComplaints";

const AComplaint = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("tips", tips);

  useEffect(() => {
    fetch("http://localhost:8080/admin/complaint")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data); // Debugging line to check fetched data
        if (Array.isArray(data.content)) {
          setTips(data.content);
        } else {
          console.error("Expected array but got:", data);
          setError("Failed to load tips.");
        }
      })
      .catch((error) => {
        console.error("Error fetching tips:", error);
        setError("Error fetching tips.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const gridContainerStyle = {
    display: "grid",
    gridTemplateRows: "repeat(4, 1fr)",
    gap: "15px",
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={gridContainerStyle}>
      {tips.map((tip, index) => (
        <AComplaints 
          key={index} 
          suppliersName={tip.supplier?.supplierName} 
          content={tip.content} 
        />
      ))}
    </div>
  );
};

export default AComplaint;
