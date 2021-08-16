import React from "react";
import "./grupalindividual.css";

function GrupalIndividual() {
  return (
    <div>
      <div className="main-container">
        <h1>Grupal - Individual</h1>
        <p>Este apartado contiene la información de crédito individual y grupal</p>
        <div className="container-gruind">
          <div className="container-grupal">
            <h3>Grupal</h3>
            <div className="grupal">
              <div className="grupal-info">
                <h4>Infografivos</h4>
                <ul>
                  <li className="center">Agosto</li>
                  <li>Julio</li>
                </ul>
              </div>
              <div className="grupal-info">
                <h4>Spots</h4>
                <ul>
                  <li>Agosto</li>
                  <li>Julio</li>
                </ul>
              </div>
              <div className="grupal-info">
                <h4>Imagenes</h4>
                <ul>
                  <li>Agosto</li>
                  <li>Julio</li>
                </ul>
              </div>
              <div className="grupal-info">
                <h4>Videos</h4>
                <ul>
                  <li>Agosto</li>
                  <li>Julio</li>
                </ul>
              </div>
            </div>
          </div>
          {/* fin grupal */}
          <div className="container-individual">
              <h3>Individual</h3>
            <div className="individual">
              <div className="individual-info">
                <h4>Infografivos</h4>
                <ul>
                  <li>Agosto</li>
                  <li>Julio</li>
                </ul>
              </div>
              <div className="individual-info">
                <h4>Spots</h4>
                <ul>
                  <li>Agosto</li>
                  <li>Julio</li>
                </ul>
              </div>
              <div className="individual-info">
                <h4>Imagenes</h4>
                <ul>
                  <li>Agosto</li>
                  <li>Julio</li>
                </ul>
              </div>
              <div className="individual-info">
                <h4>Videos</h4>
                <ul>
                  <li>Agosto</li>
                  <li>Julio</li>
                </ul>
              </div>
            </div>
          </div>
          {/* fin individual container */}
          <div className="listado">
            <h4>Lista de Archivos</h4>
            <ul className="listado-ul">
              <li>Los 7 habitos de la gente altamente efectiva </li>
              <li>Protocolo de solicitud de gafetes</li>
              <li>Directorio ADS</li>
              <li>Protocolo de solicitud de polos</li>
              <li>Protocolo de solicitud de camisas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GrupalIndividual;
