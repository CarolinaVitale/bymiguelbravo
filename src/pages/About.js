import React from "react";
import "../styles/App.css";
import miguel2 from "../images/miguel-bravo2.jpeg";

function About() {
    return (

        <div className='about-info'>
            <div className='container-pic'>
                <img className='about-pic' src={miguel2} alt='miguel'></img>
            </div>
            
            <p>Con una formación inicial como ingeniero en 2013, Miguel descubrió su verdadera pasión en la cocina, graduándose en Le Cordon Bleu de Perú con la mención del Cordon Azul en 2015. Desde entonces, ha dejado su huella culinaria en distintas naciones, construyendo una trayectoria de casi 10 años.
            </p>
            <p>Su apasionado viaje culinario comenzó en 2015 con un emprendimiento de catering en Venezuela, donde cautivó los paladares en eventos que iban desde íntimas bodas hasta grandes eventos corporativos. El sabor de sus creaciones se extendió a España, donde trabajó de 2017 a 2022, consolidando su habilidad y amor por la cocina.
            </p>
            <p>En 2019, enriqueció su conocimiento con un curso de gastronomía japonesa en España, fusionando la maestría en la cocina asiática con sus especialidades en cocina española, peruana y francesa. Su corazón late con pasión por los sabores asiáticos, pero su versatilidad y dedicación a la excelencia culinaria lo convierten en un maestro de diversas cocinas.
            </p>
            <p>Con casi una década de experiencia, Miguel no solo domina el arte de la cocina, sino que infunde cada plato con su pasión por la creación culinaria. Más allá de ser un ingeniero transformado en chef, él personifica la dedicación y amor por la cocina, compartiendo su pasión a través de cada experiencia gastronómica exquisita.</p>
        </div>

    );
}


export default About;