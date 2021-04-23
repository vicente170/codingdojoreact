import React, { useState, useRef } from "react";

const Walker = () => {
  const [selected, setSelected] = useState("people");
  const [objects, setObjects] = useState([]);
  const [enumber, setEnumber] = useState();
  const [elegido, setElegido] = useState({});

  const formRef = useRef(null);

  const onChange = (e) => {
    getSelected(e.target.value);
    setElegido({});
  };

  const getSelected = (selected) => {
    fetch("https://swapi.dev/api/" + selected)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response.results);
        setObjects(response.results);
        setSelected(selected);
      });
  };

  const showSelected = () => {
    if (selected === "films") {
      return objects
        ? objects.map((item, index) => {
            return (
              <p key={index}>
                {" "}
                {index + 1} - {item.title}{" "}
              </p>
            );
          })
        : null;
    } else {
      return objects
        ? objects.map((item, index) => {
            return (
              <p key={index}>
                {" "}
                {index + 1} - {item.name}{" "}
              </p>
            );
          })
        : null;
    }
  };

  const getElegido = () => {
    console.log("https://swapi.dev/api/" + selected + "/" + enumber);

    fetch("https://swapi.dev/api/" + selected + "/" + enumber)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setElegido(response);
      });
  };

  const showElegido = () => {
    if (Object.keys(elegido).length === 0 && elegido.constructor === Object) {
      return "";
    } else {
      if (selected === "films") {
        return (
          <div>
            <h2> {elegido?.title} </h2>
            <h5> Director: {elegido?.director} </h5>
            <h5> Productor: {elegido?.producer} </h5>
            <h6> Fecha de Lanzamiento: {elegido?.release_date} </h6>
            <h6> Opening: {elegido?.opening_crawl} </h6>
          </div>
        );
      }
      if (selected === "people") {
        return (
          <div>
            <h2> {elegido?.name} </h2>
            <h5> Altura: {elegido?.height} </h5>
            <h5> Peso: {elegido?.mass} </h5>
            <h6> Color de pelo: {elegido?.hair_color} </h6>
            <h6> Color de ojos: {elegido?.skin_color} </h6>
          </div>
        );
      }

      if (selected === "vehicles") {
        return (
          <div>
            <h2> {elegido?.name} </h2>
            <h5> Modelo: {elegido?.model} </h5>
            <h5> Costo: {elegido?.cost_in_credits} </h5>
            <h6> Pasajeros totales: {elegido?.passengers} </h6>
            <h6> Capacidad de Carga: {elegido?.cargo_capacity} </h6>
          </div>
        );
      }
      if (selected === "species") {
        return (
          <div>
            <h2> {elegido?.name} </h2>
            <h5> Vida promedio: {elegido?.average_lifespan} </h5>
            <h5> Altura Promodio: {elegido?.average_height} </h5>
            <h6> Idioma: {elegido?.language} </h6>
            <h6> Designacion: {elegido?.designation} </h6>
          </div>
        );
      }
      if (selected === "planets") {
        return (
          <div>
            <h2> {elegido?.name} </h2>
            <h5> Diametro: {elegido?.diameter} </h5>
            <h5> Población: {elegido?.population}  </h5>
            <h6> Clima: {elegido?.climate} </h6>
            <h6> Gravedad: {elegido?.gravity}</h6>
          </div>
        );
      }


    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = {};
    for (let [key, value] of formData.entries()) data[key] = value;
    getElegido();
  };

  return (
    <div>
      <form onSubmit={onSubmit} ref={formRef}>
        <select name="apiselect" id="apiselect" onChange={onChange}>
          <option>Elegir</option>
          <option value="people">People</option>
          <option value="films">Films</option>
          <option value="vehicles">Vehicles</option>
          <option value="species">Species</option>
          <option value="planets">Planets</option>
        </select>
        <label style={{marginLeft:30}} htmlFor='number'>Id: </label>
        <input
            id='number'
          type="number"
          name="number"
          onChange={(e) => setEnumber(e.target.value)}
        ></input>
        <input type="submit" />
      </form>

      <div className="list">
        {/* {objects? objects.map((item,index)=>{
                    return (<li key={index}> {item.name} </li>)
                }):null
            } */}
        {showSelected()}
      </div>
      <h1 style={{ marginTop: 20 }}>Has elegido a:</h1>
      <div className="elegido">{showElegido()}</div>
    </div>
  );
};

export default Walker;
