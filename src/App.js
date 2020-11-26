import React, { useState } from "react";
// style
import "./App.css";
// components
import Form from "./components/Form";
import ImagePreview from "./components/ImagePreview";
import Result from "./components/Result";

function App() {
  const [data, setData] = useState({ title: "", category: "", image: "" });

  // Events
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleChangeImage = (e) => {
    setData({ ...data, [e.target.name]: e.target.files[0] });
  };

  return (
    <div className="App row">
      <div className="col-lg">
        <Form changeEvent={handleChange} changeImageEvent={handleChangeImage} />
        <Result
          image={data.image.name}
          title={data.title}
          category={data.category}
        />
      </div>
      <div className="col-lg">
        <ImagePreview image={data.image} imageName={data.title} />
      </div>
    </div>
  );
}

export default App;
