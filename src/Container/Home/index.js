import React, { useState } from "react";
import { View, Text } from "react-native";
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

import WordsRef from "./words.json";

const diciojs = require('dicionario.js')

export default function Home(){
    const[words, setWords] = useState(WordsRef);
    console.log("👽 WordsRef", WordsRef[0])

    React.useEffect(async () => {
        const word = await diciojs.significado('cervo')
        console.log(word)
    }, [])

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
                        X
                    </Text>
                </ButtonContentLeft>
            </View>
            <View style={{width: "50%", display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
                <ButtonRightShadow/>
                <ButtonContentRight>
                    <Text style={{ color: "#F3E3E3", fontSize: 20, fontWeight: "bold" }}>
                        X
                    </Text>
                </ButtonContentRight>
            </View>
        </View>
        <View style={{padding: 5, display: "flex", flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center"}}>
            <TextKey>Q</TextKey>
            <TextKey>W</TextKey>
            <TextKey>E</TextKey>
            <TextKey>R</TextKey>
            <TextKey>T</TextKey>
            <TextKey>Y</TextKey>
            <TextKey>U</TextKey>
            <TextKey>I</TextKey>
            <TextKey>O</TextKey>
            <TextKey>P</TextKey>
        </View>
        <View style={{padding: 5, display: "flex", flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center" }}>
            <TextKey>A</TextKey>
            <TextKey>S</TextKey>
            <TextKey>D</TextKey>
            <TextKey>F</TextKey>
            <TextKey>G</TextKey>
            <TextKey>H</TextKey>
            <TextKey>J</TextKey>
            <TextKey>K</TextKey>
            <TextKey>L</TextKey>
        </View>
        <View style={{padding: 5, display: "flex", flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center" }}>
            <TextKey>Z</TextKey>
            <TextKey>X</TextKey>
            <TextKey>C</TextKey>
            <TextKey>V</TextKey>
            <TextKey>B</TextKey>
            <TextKey>N</TextKey>
            <TextKey>M</TextKey>
        </View>
    </Page>
    )
}