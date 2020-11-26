import React from "react";

function Result(props) {
  const url = `/images/noticias/${props.category}/${props.image}`;
  const image = `<img src="${url}" alt="${props.title}" class="wclm-img-container" />`;
  const result = `{modal auto_titles="false" url="${url}"}${image}{/modal}`;
  const style = {
    padding: "20px",
  };
  const handleClick = () => {
    const toCopy = document.querySelector("#result");
    toCopy.select();
    toCopy.setSelectionRange(0, 99999);
    document.execCommand("copy");
  };

  const handleChange = (e) => {
    console.log(e.target);
  };

  return (
    <div className="result-container" style={style}>
      <div className="form-group">
        <h3 className="section-title">Muestra Resultado</h3>
        <textarea
          onChange={handleChange}
          className="form-control"
          id="result"
          value={result}
        ></textarea>
      </div>
      <div className="form-group">
        <button onClick={handleClick} className="btn btn-outline-secondary">
          Copy
        </button>
      </div>
    </div>
  );
}

export default Result;
