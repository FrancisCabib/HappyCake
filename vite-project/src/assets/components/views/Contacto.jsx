import React from 'react';

function Contacto() {
  return (
    <>
      <main className="container mt-5">
        <h2 className="text-center">Envíanos un mensaje para ponernos en contacto</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre Completo:</label>
            <input type="text" className="form-control" id="nombre" placeholder="Nombre Completo" />
          </div>
          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">Teléfono:</label>
            <input type="tel" className="form-control" id="telefono" placeholder="Teléfono" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo:</label>
            <input type="email" className="form-control" id="email" placeholder="ejemplo@ejemplo.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">Mensaje:</label>
            <textarea className="form-control" id="mensaje" rows="6"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </main>
    </>
  );
}

export default Contacto;
