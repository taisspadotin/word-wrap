import React, { useState } from "react";
import { View, Text } from "react-native";
import { Input, Key, TextKey } from "./style";
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
            <View style={{
                backgroundColor: "#BD5061",
                borderTopRightRadius: 10,
                borderBottomEndRadius: 10,
                height: 55,
                paddingRight: 25,
                paddingLeft: 10,
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                width: "60%"
            }}>
            </View>
            <View
                style={{
                    width: "58%",
                    borderTopRightRadius: 10,
                    borderBottomEndRadius: 10,
                    backgroundColor: "#2F3342",
                    height: 55,
                    marginTop: -64,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                    }}
            >
            <Text
                    style={{
                        color: "#F3E3E3",
                        fontSize: 20,
                        fontWeight: "bold"
                    }}
                >
                    WORD WRAP
                </Text>
            </View>
        </View>
        <View style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-end", marginBottom: 15, marginTop: 10 }}>
            <View style={{
                backgroundColor: "#2F3342",
                borderTopLeftRadius: 10,
                borderBottomStartRadius: 10,
                height: 55,
                paddingRight: 25,
                paddingLeft: 10,
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                width: "55%"
            }}>
            </View>
            <View
                style={{
                    width: "57%",
                    borderTopLeftRadius: 10,
                    borderBottomStartRadius: 10,
                    backgroundColor: "#BD5061",
                    height: 55,
                    marginTop: -64,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                    }}
            >
            <Text
                    style={{
                        color: "#F3E3E3",
                        fontSize: 20,
                        fontWeight: "bold"
                    }}
                >
                    CONFIGURAÇÕES
                </Text>
            </View>
        </View>
        <View style={{display: "flex", flexDirection: "row", marginTop: 10, padding: 10}}>
            <Input/>
            <Input />
            <Input/>
            <Input/>
            <Input/>
        </View>
        <View style={{padding: 5, display: "flex", flexDirection: "row", width: "100%"}}>
            <Key><TextKey>Q</TextKey></Key>
            <Key><TextKey>W</TextKey></Key>
            <Key><TextKey>E</TextKey></Key>
            <Key><TextKey>R</TextKey></Key>
            <Key><TextKey>T</TextKey></Key>
            <Key><TextKey>Y</TextKey></Key>
            <Key><TextKey>U</TextKey></Key>
            <Key><TextKey>I</TextKey></Key>
            <Key><TextKey>O</TextKey></Key>
            <Key><TextKey>P</TextKey></Key>
        </View>
    </Page>
    )
}