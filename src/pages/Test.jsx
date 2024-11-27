import { useState } from "react";

const Test = () => {
  const [formData, setFormData] = useState({
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    try {
      const response = await fetch("http://localhost:3000/insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log(response);
      } else {
        const error = await response.text();
        console.error("Error al crear el registro:", error);
        alert("Error al crear el registro");
      }
    } catch (error) {
      console.error("Error al crear el registro:", error);
      alert("Error al crear el registro");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        value={formData.text}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Test;
