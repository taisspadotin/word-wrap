import React from "react";
import { View, Text } from "react-native";
import { ButtonRightShadow, ButtonContentRight } from "./style";

export default function WinnerScreen(props){
    const handleNexLevel = () => {
        props.closeModal()
    }

    return(
        <View style={{width: "100%"}}>
            <Text style={{width: "100%", textAlign: "center", color: "#2f3341", fontSize: 16, fontWeight: "bold"}}>
                PARABENS!
            </Text>
            <Text style={{width: "100%", marginTop: 10, textAlign: "center", color: "#2f3341"}}>A palavra correta era: PLANO</Text>
            <View style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-end", marginTop: 50}}>
                <ButtonRightShadow/>
                <ButtonContentRight onPress={() => handleNexLevel()}>
                    <Text style={{ color: "#F3E3E3", fontSize: 20, fontWeight: "bold" }}>
                        Próximo nível
                    </Text>
                </ButtonContentRight>
            </View>
        </View>
    )
}