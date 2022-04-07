
import styled from 'styled-components/native';

export const Page = styled.View`
    width: 100%;
    height: 100%;
    background-color: #F3E3E3;
    padding-top: 50px;
`;

export const Input = styled.TextInput`
    width: 50px;
    height: 50px;
    background-color: #f3e3e3;
    border-radius: 4px;
    border-color: #2f3341;
    border-width: 1px;
    margin-right: 5px;
`;

export const Key = styled.View`
    width: 32px;
    height: 32px;
    background-color: #BD5061;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 3px;
`;

export const TextKey = styled.Text`
    color: #F3E3E3;
    font-weight: bold;
    font-size: 20px;
`;

export const TitleContentLeft = styled.View`
    width: 58%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #2F3342;
    height: 55px;
    margin-top: -64px;
    display: flex;
    justify-content: center;
    align-items: center;
`;