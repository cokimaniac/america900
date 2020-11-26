import React from "react";

function Form(props) {
  const style = {
    padding: "20px",
  };
  return (
    <div className="form-container" style={style}>
      <h3 className="section-title">Formulario Noticia</h3>
      <form id="Form">
        <div className="form-row">
          <div className="form-group col-lg">
            <input
              onChange={props.changeEvent}
              type="text"
              name="title"
              className="form-control"
              id="title"
              placeholder="Título de la noticia"
            />
          </div>
          <div className="form-group col-lg">
            <select
              onChange={props.changeEvent}
              name="category"
              className="form-control"
              id="category"
            >
              <option defaultValue>Seleccionar Categoría</option>
              <option value="farandula">Farandula</option>
              <option value="deportes">Deportes</option>
              <option value="noticias_eeuu">Noticias EEUU</option>
              <option value="mundo">Mundo</option>
              <option value="noticias_radio">Noticias Radio</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <input
            type="file"
            name="image"
            onChange={props.changeImageEvent}
            className="form-control"
            id="image"
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
