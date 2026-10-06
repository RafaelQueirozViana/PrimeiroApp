import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface Props{
    autor: string
    texto: string
    nota: number

}
export default function ComentarioCard({autor, texto, nota}: Props) {
  return (
    <View style={style.card}> 
        <View style={style.header}>
            <View style={style.avatar}>
                <Text style={style.avatarText}> {autor[0]} </Text>
            </View>
            <View>
                <Text style={style.autor}> {autor} </Text>
                <Text style={style.nota}> {nota}/5 </Text>
            </View>
        </View>
        <Text>{texto}</Text>
    </View>
  )
}

const style = StyleSheet.create({
    card: {
        backgroundColor: "#fafafa",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#eee",
        padding: 14,
        marginBottom: 10
    },
    header:{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginBottom:10
    },
    avatar:{
        width:36,
        height:36,
        borderRadius: 18,
        backgroundColor: "#ffe600",
        alignItems: "center",
        justifyContent: "center"
    },
    autor:{
        fontSize:13,
        fontWeight:"700",
    },
    nota:{
        fontSize:10,
        color:"#808080"
    },
    texto:{
        fontSize:14,
        color:"#222",
    },
    avatarText:{
        fontSize: 16,
        fontWeight: "700",
        color: " #333"
    }
})