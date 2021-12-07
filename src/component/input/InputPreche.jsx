import React from 'react';

const InputPreche = ({ style, handleChange, data }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="titre du cour"
        style={style.input}
        onChange={handleChange}
        id="titleCourt"
        value={data.titleCourt}
        required
      />
      <input
        type="date"
        style={style.input}
        id="dateCourt"
        onChange={handleChange}
        value={data.dateCourt}
        required
      />
      <input
        type="text"
        placeholder="Nom du precheur"
        style={style.input}
        id="name"
        onChange={handleChange}
        value={data.name}
        required
      />
      <input
        type="file"
        style={style.input}
        id="fileCourt"
        onChange={handleChange}
        value={data.fileCourt}
        required
      />
    </div>
  );
};

export default InputPreche;
