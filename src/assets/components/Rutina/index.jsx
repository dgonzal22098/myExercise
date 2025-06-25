import styled from 'styled-components';
import Button from '../Button';
import {useState} from "react";
import TableRutina from "./TableRutina";
import {capitalize} from "@mui/material";
import {useNavigate} from "react-router-dom";


const Rutina = () => {
    const hoy = new Date();
    const navigate = useNavigate();
    const fechaFormateada = hoy.toLocaleDateString('es-CO', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    const dayToday = hoy.toLocaleDateString('es-CO', {
        weekday: 'long',
    });

    const [diaRutina, setDiaRutina] = useState("");
    const [entrenamos, setEntrenamos] = useState(false);
    const [showWeekdays, setShowWeekdays] = useState(false);
    const [clear, setClear] = useState(true);

    const manejarClickHoy = () => {
        const diaDescanso = [ "miércoles", "viernes", "domingo"];
        const hoyMin = dayToday.toLowerCase();
        setEntrenamos(!diaDescanso.includes(hoyMin));
        setDiaRutina(hoyMin);
        setClear(false);
    }

    const manejarClickOtroDia = () => {
        setShowWeekdays(true);
    }

    const manejarSeleccionDia = (dia) => {
        const diaDescanso = [ "miércoles", "viernes", "domingo"];
        setDiaRutina(dia);
        setEntrenamos(!diaDescanso.includes(dia));
        setShowWeekdays(false);
        setClear(false);
    }

    const handleClear = () => {
        setClear(true);
        setDiaRutina("");
        setEntrenamos(false);
        setShowWeekdays(false);

    }

    const regresar = () => {
        navigate("/");
    }

    return <Container>
        <div className="header">
            <p>RUTINA DE DIEGO</p>
            <p>{fechaFormateada}</p>
        </div>
        <Button
        texto="HOY"
        color="#9B177E"
        onClick={manejarClickHoy}
        />
        <Button
        texto=" OTRO DÍA"
        color="#E8988A"
        onClick={manejarClickOtroDia}
        />
        <div className="clear">
            <Button
            texto="Clear"
            onClick={handleClear}
            />
        </div>
        {showWeekdays && (
            <Days>
                {weekdays.map((day, index) => (
                    <DayItem key={index} onClick={() => manejarSeleccionDia(day)}>
                        {day.toUpperCase()}
                    </DayItem>
                ))}
            </Days>
        )}

        <div className="content">
            {clear ? (
                <p>Selecciona uno de los días para mostrar!</p>
            ): (
                <>
                    <h2>
                        {diaRutina === dayToday.toLowerCase()
                            ? `Hoy ${capitalize(diaRutina)} se entrena: `
                            : `${capitalize(diaRutina)} se entrena: `
                        }

                    </h2>
                    {entrenamos ? (
                        <TableRutina dia={diaRutina}
                        />) : (
                        <p style={{ textAlign: 'center' }}>No hay ejercicios para este día.</p>
                    )}
                </>
            )}

        </div>

        <div className="salir">
            <Button
            texto="REGRESAR"
            color="#03A6A1"
            onClick={regresar}
            />
        </div>

    </Container>
}

export default Rutina;

const weekdays = [
    "lunes",
    "martes",
    "jueves",
    "sábado",
]
const Days = styled.div`
    display: flex;
    gap: 1rem;
    color: black;
    margin-top: 1rem;
    flex-wrap: wrap;
    justify-content: center;
`;

const DayItem = styled.div`
  background-color: #f0f0f0;
  border: 2px solid #9b177e;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  text-transform: capitalize;
  transition: 0.2s ease;

  &:hover {
    background-color: #9b177e;
    color: white;
  }
`;

const Container = styled.div`
    width: 100dvw;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: start;
    align-items: center;
    
    .clear{
        width: 40%;
    }

    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        padding: 1rem;
    }
`




