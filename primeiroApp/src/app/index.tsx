import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ComentarioCard from "@/components/ComentarioCard";
import { Link } from "expo-router";

const comentarios= [
  {id: 1, autor: "Lucas", nota: 5, texto: "Produto excelente, superou as expectativas"},
  {id: 2, autor: "Bruna", nota: 2, texto: "A entrega demorou e veio levemente sujo"},
  {id: 3, autor: "Luiza", nota: 3, texto: "Muito bom, entrega rápida"},
  {id: 4, autor: "Kauana", nota: 4, texto: "Produto bom, superou as expectativas"},
]

export default function Index(){
  return(
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Mercado Livre</Text>
      </View>

      <Image style={styles.imagemProduto} source={{uri: "https://http2.mlstatic.com/D_NQ_NP_2X_788058-MLA108114860853_032026-F.webp"}} />
      <Text style={styles.produtoNome}>MacBook Neo de 13 polegadas: Chip A18 Pro, CPU de 6 núcleos, GPU de 5 núcleos, 256GB - Índigo</Text>
      <Text style={styles.produtoPreco}>R$ 5.139</Text>

      <TouchableOpacity style={styles.btnComprar}>
        <Text style={styles.btnText}>Comprar agora</Text>
      </TouchableOpacity>
      
        <Text style={styles.descricaoTitulo}>Descrição</Text>
        <Text style={styles.descricaoTexto}>
            O MacBook Neo está pronto para seu dia a dia. Ele voa por tarefas e apps, tem quatro cores lindas para escolher, estrutura resistente em alumínio, tela Liquid Retina brilhante de 13 polegadas¹, chip A18 Pro pensado para IA e Apple Intelligence² e até 16 horas de bateria³. É um Mac incrível e uma escolha inteligente.
        </Text>

        <View style={styles.separator}></View>
          
          <Link href={"/Vendedor"} asChild>
            <TouchableOpacity style={styles.sellerCard}>
            <Image style={styles.sellerAvatar} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzGFPW0sgEm-0iuzeWYk6IX7brqwHHH2CDGJweUsQgHSrEr8DB0LRPLqW5&s=10"}}/>
            <View style={styles.sellerInfo}>
              <Text style={styles.sellerLabel}>Vendedor</Text>
              <Text style={styles.sellerName}>Menina da bota</Text>
            </View>
          </TouchableOpacity>
          
          </Link>

        
        <View style={styles.separator}></View>

        <Text style={styles.comentarioTitle}>Comentários</Text>

        <FlatList 
        data ={comentarios}
        scrollEnabled={false}
        renderItem={({item}) =>(
         <ComentarioCard
         autor={item.autor}
         nota={item.nota}
         texto={item.texto}
         />
        ) }/>

    </ScrollView>
  )
}

const styles = StyleSheet.create({

  imagemProduto:{
    width: "100%",
    height: 240
  
  },

  container:{
    backgroundColor: "#fff",
    width: "100%",
    flex: 1
  },

  header: {
    backgroundColor: "#ffe600",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 12
  },

  headerText:{
    color:"#000",
    fontWeight: "bold",
    fontSize: 18
  },
  produtoNome:{
    fontSize: 18,
    fontWeight: "medium",
    marginTop: 10,
    marginBottom: 8,
    paddingHorizontal: 10
  },

  produtoPreco:{
    fontSize: 28,
    fontWeight: "normal",
    marginBottom: 24,
    paddingHorizontal: 10
  },

  btnComprar:{
    backgroundColor: "#ffe600",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 14,
    marginHorizontal: 10,
    alignItems: "center"
  },

  btnText:{
    fontSize:15,
    fontWeight: "bold"
  },

  descricaoTitulo:{
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 10,
    paddingHorizontal: 8,
  },

  descricaoTexto:{
    marginHorizontal: 10
  },
  separator:{
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 24,
    marginHorizontal: 15
  },
  comentarioTitle:{
    fontSize: 15,
    fontWeight: "bold",
    paddingHorizontal: 15,
    marginBottom: 8
  },
  sellerCard:{
    flexDirection: "row",
    alignContent: "center",
    backgroundColor: "#fafafa",
    borderRadius: 10,
    padding: 14,
    borderWidth:1,
    borderColor:"#eee",
    marginHorizontal: 10,
  },
  sellerName:{
    fontSize: 15,
    fontWeight: "700"
  },
  sellerAvatar:{
    height: 46,
    width:46,
    borderRadius:23,
    marginRight:12
  },
  sellerLabel:{
    fontSize: 12,
    color: "#888",
  },
  sellerInfo:{
    justifyContent:"center",
  }

})