import{View,ImageBackground ,Text, StyleSheet, FlatList} from "react-native";
import HouseList from "@/assets/datas/datas-appartements.json";
import { createIconSetFromFontello } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';

const Page = () => {

    return (
        // Affiche un conteneur principal, avec des styles définis dans styles.container.
    <View style={styles.container} >

        {/* Ce bloc est l’en-tête : Affiche le mot “Découvrir”, Ensuite, une icône de loupe (la bibliothèque AntDesign est utilisée pour ça).
        Le style de ce bloc est styles.FirstView, et celui du texte est styles.textofView. */}

        <View style={styles.FirstView} > 
            <Text style={styles.textofView} >Découvrir </Text> 
            <AntDesign name="search1" size={35} color="black" />
        </View>

        <FlatList  // FlatList est une liste optimisée pour afficher beaucoup d’éléments rapidement.
            data ={HouseList}  
            horizontal
            contentContainerStyle={styles.contentContainer}
            keyExtractor={(item)=>item.cover_image_url.toLowerCase().toString()+Math.floor(Math.random() * 1000)}
        
        
        renderItem={({item}) => <View style={styles.ImageBlock} >
       <ImageBackground 
         source={{ uri: item.cover_image_url }} 
         resizeMode="cover"
         style={styles.ImageBackground}>

        <View style={{flexDirection : "row"}} >
        <View style={styles.tag} >
        <Text style={styles.tagtext} >nouveauté</Text>
        </View>
        </View>
         </ImageBackground>

            {/* lieu de la maison + notation */}
                <View style= {styles.sndView}>
                    <Text style={styles.nameLO}>{item.location_city}</Text>
                    <View style={styles.tagContainer} >
                        <Text style={styles.sndViewText} >5.0</Text>
                        <AntDesign name="star" size={18} color="yellow" />
                    </View>
                </View>

            {/* le prix de la location + nombre de personnes qui ont visiter  */}

                <View style= {styles.sndView1}>
                    <Text style={styles.nameLO1}> $ {item.month_price} /mois</Text>
                    <View style={styles.tagContainer} >
                    <AntDesign name="user" size={18} color="yellow" />
                        <Text style={styles.sndViewText}> 4 visiite </Text>
                      
                    </View>
                </View>
    
    
       
        </View>}  />
    </View>
    );


};

export default Page;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#f5f5f5",
  

    },
    FirstView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 15,
        alignItems: "center",
        marginTop: 50,
        margin:25,

    },
    textofView:{
        fontSize : 35, fontWeight:"bold", color:"black" 

    }, 
    contentContainer:{
        gap: 20,
    },
    ImageBackground :{
        height: 200,
        borderRadius: 20,
        overflow: "hidden", // j'ai ajouter cette ligne pour pouvoi voir les bordures arrondis 
        padding:15,
    },
    ImageBlock : {
        width: 300,
        gap: 30,
        marginLeft: 15,

    },
    tag:{
        backgroundColor:"red",
        borderRadius:10, 
        padding:8,
    },
    tagtext:{
        color:"white",

    },
    tagContainer : {
        backgroundColor:"grey",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        borderRadius: 5,
        padding:5,
        
    },
    sndView:{
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "space-between",
        marginTop: 20,
        
    },
    sndViewText: {
        color:"white",
        fontSize: 15,
        fontWeight:"bold",
    },
    nameLO:{
        fontSize: 20, fontWeight:"bold", color:"black",
    },
    nameLO1:{
        fontSize: 20, fontWeight:"bold", color:"grey",
    },
    sndView1:{
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "space-between",
        marginTop: 10,
    },


});