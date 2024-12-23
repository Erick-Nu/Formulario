// src/componentes/FormularioRegistro.jsx

import React, { useState } from 'react';

const FormularioRegistro = () => {
  // Estados para almacenar los datos del formulario
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [materias, setMaterias] = useState(['']);
  const [fechas, setFechas] = useState(['']);
  const [mensaje, setMensaje] = useState('');

  // Maneja el cambio en el campo de materia o fecha
  const handleMateriaFechaChange = (index, value, type) => {
    if (type === 'materia') {
      const nuevasMaterias = [...materias];
      nuevasMaterias[index] = value;
      setMaterias(nuevasMaterias);
    } else if (type === 'fecha') {
      const nuevasFechas = [...fechas];
      nuevasFechas[index] = value;
      setFechas(nuevasFechas);
    }
  };

  // Agregar una nueva fila de materia y fecha
  const agregarFila = () => {
    setMaterias([...materias, '']);
    setFechas([...fechas, '']);
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); 

    // Validaciones básicas
    if (!nombre || !correo || materias.some((materia) => !materia) || fechas.some((fecha) => !fecha)) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Construcción del mensaje final
    const resumenMaterias = materias
      .map((materia, index) => `- ${materia} [Fecha: ${fechas[index]}]`)
      .join('\n');

    setMensaje(`¡Gracias, ${nombre}!
Tus datos han sido registrados.
Materias cursadas:
${resumenMaterias}`);
  };

  return (
    <div className="container" style={{ padding: '20px', maxWidth: '600px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h2> REGISTRO </h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
      >
        {/* Campo de nombre */}
        <label>
          Nombre completo:  
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingresa tu nombre"
            required
          />
        </label>

        {/* Campo de correo */}
        <label>
          Correo electrónico:
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Ingresa tu correo"
            required
          />
        </label>

        {/* Materias y fechas */}
        {materias.map((materia, index) => (
          <div key={index} style={{ display: 'flex', gap: '10px' }}>
            <label style={{ flex: 1 }}>
              Materia:
              <input
                type="text"
                value={materia}
                onChange={(e) => handleMateriaFechaChange(index, e.target.value, 'materia')}
                placeholder="Materia cursada"
                required
              />
            </label>
            <label style={{ flex: 1 }}>
              Fecha de cursado:
              <input
                type="date"
                value={fechas[index]}
                onChange={(e) => handleMateriaFechaChange(index, e.target.value, 'fecha')}
                required
              />
            </label>
          </div>
        ))}

        {/* Botón para agregar más materias */}
        <button type="button" onClick={agregarFila} style={{ marginTop: '10px' }}>
          + Agregar Materia
        </button>

        {/* Botón de envío */}
        <button type="submit" style={{ marginTop: '20px' }}>
          Enviar
        </button>
      </form>

      {/* Mensaje de agradecimiento */}
      {mensaje && (
        <div className='boxMensaje'
          style={{
            marginTop: '20px',
            padding: '10px',
            backgroundColor: '#f0f0f0',
            borderRadius: '5px',
            whiteSpace: 'pre-line',
            background: '#A7D477',
          }}
        >
          {mensaje}
        </div>
      )}
    </div>
  );
};

export default FormularioRegistro;