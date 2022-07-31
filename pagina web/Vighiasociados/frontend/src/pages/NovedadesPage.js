import '../styles/NovedadesPage.css';

const NovedadesPage = (props) => {
    return (
        <main className="holder">

            <div className="novedades">
                <div className="contenedorIzquierdo">
                    <h3>Ley de fertilización asistida</h3>
                    <img src="img/novedades/foto1.jpg" alt="foto1" />
                </div>
                <div className="contenedorDerecho">
                    <div className="info">
                        <p>La Ley 26862, establece que toda persona mayor de edad, cualquiera sea su orientación sexual o
                            estado civil,tenga obra social, prepaga o se atienda en el sistema público de salud, puede acceder de forma
                            gratuita a las técnicas y procedimientos realizados con asistencia médica para lograr el embarazo. La Corte
                            Suprema de Justicia de la Nación, ha establecido, que no existe limitación alguna en cuanto a la calidad y
                            cantidad de tratamientos necesarios para obtener el cometido de la norma.
                            Si su Obra Social o Prepaga, no acata la cantidad establecida, no dude en consultarnos, estamos
                            para ayudarle.
                        </p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="novedades">
                <div className="contenedorIzquierdo">
                    <h3>Enfermedades profesionales o Accidentes de trabajo</h3>
                    <img src="img/novedades/foto2.jpg" alt="foto2" />
                </div>
                <div className="contenedorDerecho">
                    <div className="info">
                        <ul>
                            <li>Enfermedad o accidente producido a consecuencia de las condiciones del trabajo.</li>
                            <li>Puede provenir de la exposición a factores físicos, químicos o biológicos.</li>
                            <li>Muchas de las enfermedades no presentan síntomas manifiestos.</li>
                            <li>Es importante conocer su presencia, para frenar el avance y recibir el tratamiento adecuado</li>
                            <li>Realice la denuncia correspondiente ante su empleador o la Aseguradora de Riesgos del
                                Trabajo (ART)</li>
                            <li>La ART, debe brindarle asistencia médica, farmaceútica, prótesis y ortopedia entre otras.</li>
                        </ul>
                    </div>
                </div>
            </div>

        </main>
    );
}
export default NovedadesPage;