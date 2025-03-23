import{View,ImageBackground ,Text, StyleSheet, FlatList} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign'; //ici j'ai importer l'icone recherche 
import HouseList from "@/assets/datas/datas-appartements.json";
import { createIconSetFromFontello } from "@expo/vector-icons";

const Page = () => {

    return (
    <View style={styles.container} >

        <View style={styles.FirstView} > 
            <Text style={styles.textofView} >Decouvrir </Text>
        
            <AntDesign name="search1" size={30} color="blue" />
        </View>

        <FlatList 
            data ={HouseList}  
            horizontal
            contentContainerStyle={styles.contentContainer}
            keyExtractor={(item)=>item.cover_image_url.toLowerCase().toString()+Math.floor(Math.random() * 1000)}
        
        
        renderItem={({item}) => <View style={styles.ImageBlock} >
       <ImageBackground 
         source={{ uri: item.cover_image_url }} 
         resizeMode="cover"
         style={styles.ImageBackground}>

        <View>
            <Text>nouveaute</Text>
        </View>
        </ImageBackground>
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
        backgroundColor:"red",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 15,
        alignItems: "center",
        marginTop: 50,
        margin:25,

    },
    textofView:{
        fontSize : 30, fontWeight:"semibold", color:"blue" 

    }, 
    contentContainer:{
        gap: 20,
    },
    ImageBackground :{
        height: 200,
        borderRadius: 20,
        overflow: "hidden", // j'ai ajouter cette ligne pour pouvoi voir les bordures arrondis 

    },
    ImageBlock : {
        width: 300,

    }

});