import styled from "styled-components/native";



export const Section = styled.View`
    width: 90%;
    height: 100px;
    border-radius: 8px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    flex-direction: row;
    margin: 10px;
`;


export const Name = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: black;
`;


export const Picture = styled.Image`
    margin: 20px;
    width: 20%;
    height: 75%;
    border-radius: 50px;
`;
