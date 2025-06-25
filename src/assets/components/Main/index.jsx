import styled from "styled-components"
import Button from '../Button'
import { useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();
    const irARutinas = () => {
        navigate('/rutinas');
    }

    const hoy = new Date();
    const fechaFormateada = hoy.toLocaleDateString('es-CO', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return<Container>
        <h1>RUTINA DE DIEGO</h1>
        <p>{fechaFormateada}</p>
        <Button
        texto="ENTRENAR"
        color="#9B177E"
        onClick={irARutinas}
        />
        <Button
        texto="MENU"
        color="#2A1458"
        />

    </Container>
}

export default Main;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
`