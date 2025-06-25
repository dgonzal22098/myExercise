import styled from 'styled-components'

const Button = ({texto, color, onClick}) => {
    return <ButtonStyled
        color={color}
        onClick={onClick}
    >{texto}</ButtonStyled>
}

export default Button;

const ButtonStyled = styled.button`
    padding: 1rem 3rem;
    width: 100%;
    background-color: ${props => props.color || 'gray'};
    border-radius: 8px;
    cursor: pointer;
    border: none;
    
    &:hover{
        opacity: 0.9;
    }
`