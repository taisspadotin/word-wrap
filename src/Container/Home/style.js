
import styled from 'styled-components/native';

export const Page = styled.View`
    width: 100%;
    height: 100%;
    background-color: #F3E3E3;
    padding-top: 50px;
`;

export const Input = styled.Text`
    width: 50px;
    height: 50px;
    background-color: ${props => props.success ? "#b5c887" : (props.anyValue ? "#eee27f" : (props.noValue ? "#d5665b" : "#f3e3e3"))};;
    border-radius: 4px;
    border-color: ${props => props.error ? "#d5665b" : "#2f3341"};
    border-width: ${props => props.error ? "2px" : "1px"};;
    margin-right: 5px;
    text-align: center;
    padding-top: 15px;
    color: #2f3341;
    font-weight: bold;
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

export const TitleShadowLeft = styled.View`
    background-color: #BD5061;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    height: 55px;
    padding-right: 25px;
    padding-left: 10px;
    display: flex;
    justify-content: center;
    align-content: center;
    width: 60%;
`;

export const TitleShadowRight = styled.View`
    background-color: #2F3342;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    height: 55px;
    padding-right: 25px;
    padding-left: 10px;
    display: flex;
    justify-content: center;
    align-content: center;
    width: 55%;
`;

export const TitleContentRight = styled.View`
    width: 57%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: #BD5061;
    height: 55px;
    margin-top: -64px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonLeftShadow = styled.View`
    background-color: #2F3342;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    height: 55px;
    padding-right: 25px;
    padding-left: 10px;
    display: flex;
    justify-content: center;
    align-content: center;
    width: 34%;
`; 

export const ButtonContentLeft = styled.TouchableOpacity`
    width: 30%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #BD5061;
    height: 55px;
    margin-top: -64px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonRightShadow = styled.View`
    background-color: #BD5061;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    height: 55px;
    padding-right: 25px;
    padding-left: 10px;
    display: flex;
    justify-content: center;
    align-content: center;
    width: 30%;
`; 

export const ButtonContentRight = styled.TouchableOpacity`
    width: 34%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: #2F3342;
    height: 55px;
    margin-top: -64px;
    display: flex;
    justify-content: center;
    align-items: center;
`;