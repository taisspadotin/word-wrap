import React from "react";
import { View, Text } from "react-native";
import { Keyboard } from "../../Components/";
import {
    Input,
    TextKey,
    Page,
    TitleShadowLeft,
    TitleContentLeft,
    TitleShadowRight,
    TitleContentRight,
    ButtonLeftShadow,
    ButtonContentLeft,
    ButtonRightShadow,
    ButtonContentRight
} from "./style";
import Ionicons from '@expo/vector-icons/Ionicons';

import WordsRef from "./words.json";

const diciojs = require('dicionario.js')

export default function Home(){
    const [words, setWords] = React.useState(WordsRef);
    const [line, setLine] = React.useState([[null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null]])
    React.useEffect(async () => {
        const word = await diciojs.significado('cervo')
        //console.log(word)
        //console.log(line[0].word)
        
    }, [])

    const handleChangeWord = (value, currentLine, position) => {
    console.log("👽 value", value)
        let newValue = line;
        newValue[currentLine][position] = value[value.length - 1];
        console.log("👽 value[value.length - 1]", value[value.length - 1])
        console.log("👽 newValue[currentLine][position]", newValue[currentLine][position])
        setLine(JSON.parse(JSON.stringify(newValue)))
        console.log("👽 newValue", newValue)
        console.log("👽 LINE[0][0]", line[0][0])
    }

    React.useEffect(() => {
        console.log("👽 LINE", line)
    }, [line])
    
    return(
    <Page>
        <View style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", marginBottom: 15, marginTop: 10 }}>
            <TitleShadowLeft/>
            <TitleContentLeft>
                <Text style={{ color: "#F3E3E3", fontSize: 20, fontWeight: "bold" }}>
                    WORD WRAP
                </Text>
            </TitleContentLeft>
        </View>
        <View style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-end", marginBottom: 15, marginTop: 10 }}>
            <TitleShadowRight/>
            <TitleContentRight>
                <Text style={{ color: "#F3E3E3", fontSize: 20, fontWeight: "bold" }}>
                    CONFIGURAÇÕES
                </Text>
            </TitleContentRight>
        </View>
        <View style={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 10 }}>
            <View style={{display: "flex", flexDirection: "row", marginTop: 10, padding: 5}}>
                <Input maxLength={1} onChangeText={(e)=> handleChangeWord(e, 0, 0)} value={line[0][0]}/>
                <Input />
                <Input/>
                <Input/>
                <Input/>
            </View>
            <View style={{display: "flex", flexDirection: "row", padding: 5}}>
                <Input/>
                <Input />
                <Input/>
                <Input/>
                <Input/>
            </View>
            <View style={{display: "flex", flexDirection: "row", padding: 5}}>
                <Input/>
                <Input />
                <Input/>
                <Input/>
                <Input/>
            </View>
            <View style={{display: "flex", flexDirection: "row", padding: 5}}>
                <Input/>
                <Input />
                <Input/>
                <Input/>
                <Input/>
            </View>
            <View style={{display: "flex", flexDirection: "row", padding: 5}}>
                <Input/>
                <Input />
                <Input/>
                <Input/>
                <Input/>
            </View>
        </View>
        <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "flex-start", marginBottom: 15, marginTop: 10 }}>
            <View style={{width: "50%"}}>
                <ButtonLeftShadow/>
                <ButtonContentLeft>
                    <Text style={{ color: "#F3E3E3", fontSize: 20, fontWeight: "bold" }}>
                        <Ionicons name="close" size={32} color="#F3E3E3"/>
                    </Text>
                </ButtonContentLeft>
            </View>
            <View style={{width: "50%", display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
                <ButtonRightShadow/>
                <ButtonContentRight>
                    <Text style={{ color: "#F3E3E3", fontSize: 20, fontWeight: "bold" }}>
                        <Ionicons name="checkmark" size={32} color="#F3E3E3"/>
                    </Text>
                </ButtonContentRight>
            </View>
        </View>
        <Keyboard/>
    </Page>
    )
}