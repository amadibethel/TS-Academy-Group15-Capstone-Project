import React from "react";
import "./PlanetaryFactsAtGlance.css";

const PlanetaryFactsAtGlance = () => {
  return (
    <section className="planetary-facts-section">
      <h2>Planetary Facts at a Glance</h2>

      <div className="table-responsive">
        <table className="planet-table">
          <thead>
            <tr>
              <th>Planet</th>
              <th>Mass</th>
              <th>Diameter</th>
              <th>Density</th>
              <th>Gravity</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Earth</td>
              <td>5.97 × 10²⁴ kg</td>
              <td>12,742 km</td>
              <td>5514 kg/m³</td>
              <td>9.8 m/s²</td>
            </tr>

            <tr>
              <td>Mars</td>
              <td>0.642 × 10²⁴ kg</td>
              <td>6,779 km</td>
              <td>3933 kg/m³</td>
              <td>3.7 m/s²</td>
            </tr>

            <tr>
              <td>Jupiter</td>
              <td>1898 × 10²⁴ kg</td>
              <td>139,820 km</td>
              <td>1326 kg/m³</td>
              <td>24.8 m/s²</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PlanetaryFactsAtGlance;

