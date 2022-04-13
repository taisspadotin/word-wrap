import styled from "styled-components";

export const TextKey = styled.Text`
    color: #F3E3E3;
    font-weight: bold;
    font-size: 20px;
    width: 32px;
    height: 32px;
    text-align: center;
`;

export const ButtonKey = styled.TouchableOpacity`
    background-color: ${props => props.useless ? "#BD506166" : (props.right ? "#637d56" : (props.used ? "#e2b353" : "#BD5061"))};
    border-radius: 4px;
    margin-right: 3px;
    width: 32px;
    height: 32px;
`;