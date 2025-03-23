import { View, Text, } from "react-native";
import { Redirect } from "expo-router";

const Page = () => {

    // Redirige automatiquement l'utilisateur vers la page d'accueil "/welcome/welcome" lors du chargement.
    return (<Redirect href={"/welcome/welcome"} />);


};

export default Page;

// pour aller sur la page d'acceuil il faut utiliser redirect 

