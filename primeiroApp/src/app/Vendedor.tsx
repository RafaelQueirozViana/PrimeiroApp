import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Vendedor() {
  return (
    <div>
        <View style={style.header}>
            
        </View>
        <View style={style.perfilContainer}>
            <Image style={style.avatar} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzGFPW0sgEm-0iuzeWYk6IX7brqwHHH2CDGJweUsQgHSrEr8DB0LRPLqW5&s=10"}}/>

            <Text style={style.sellerName}>Menina da Bota</Text>
            <Text style={style.tag}>MerdadoLíder</Text>
        </View>
        <View style={style.info}>
            <View>
                <Text style={style.infoTitle}>4.9</Text>
                <Text style={style.infoDesc}>Avaliação</Text>
            </View>
            <View>
                <Text style={style.infoTitle}>2.048</Text>
                <Text style={style.infoDesc}>Vendas</Text>
            </View>
            <View>
                <Text style={style.infoTitle}>2019</Text>
                <Text style={style.infoDesc}>Membro desde</Text>
            </View>
        </View>

        <View style={style.sobreContainer}>
            <Text style={style.sobreTitle}>SOBRE</Text>
            <Text>Especialista em produtos eletrônicos, com foco em qualidade e atendimento ao cliente. Sempre buscando oferecer a melhor experiência de compra para nossos clientes.</Text>
        </View>

        <TouchableOpacity style={style.btn}>
            <Text style={style.btnText}>Enviar mensagem</Text>
        </TouchableOpacity>
      
    </div>
  )
}

const style = StyleSheet.create({
    header: {
        backgroundColor: "#ffe600",
        alignItems: "center",
        paddingTop: 30,
        paddingBottom: 12,
        height: 65
    
    },
    perfilContainer:{
        alignItems: "center",
        marginVertical: 16
    },
    avatar:{
        height: 86,
        width:86,
        borderRadius:50,
    },
        sellerName:{
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 9
    },
    tag:{
        backgroundColor: "#ffe600",
        fontWeight: "bold",
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius:20,
        marginBottom:10
    },
    info:{
        flexDirection: "row",
        justifyContent:"space-around",
        backgroundColor: "#fafafa",
        borderRadius: 10,
        borderWidth:1,
        borderColor:"#eee",
        padding: 14,
        margin:16,  
    },
    infoTitle:{
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 17
    },
    infoDesc:{
        color:"#888",
        fontSize: 13
    },
    sobreContainer:{
        backgroundColor: "#fafafa",
        borderRadius: 10,
        borderWidth:1,
        borderColor:"#eee",
        padding:10,
        marginVertical:16,
        marginHorizontal:16
    },
    sobreTitle:{
        fontWeight: "bold",
        fontSize: 15,
        color:"#888",
        marginVertical: 7
    },
    btn:{
        backgroundColor: "#ffe600",
        paddingVertical:13,
        marginHorizontal:16,
        borderRadius: 10
    },
    btnText:{
        textAlign: "center",
        fontWeight: "bold"
    }

})
