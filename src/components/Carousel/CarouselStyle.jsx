import styled from "styled-components";


export const Container = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    gap: 20px;
`
export const Image = styled.img`
    width: 1200px;
    height: 600px;
    border-radius: 8px;
`
export const Button = styled.div`
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`
export const DotContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const Dot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => props.active ? "#000" : "#ccc"};
`