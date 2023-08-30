import { Image, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import CustomText from "../../components/text/text.component";

import { styles } from "./home.styles";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => navigation.navigate("lista")}
      >
        <CustomText style={styles.btnText}>Conhecer Parques</CustomText>
        <AntDesign name="arrowright" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => navigation.navigate("favoritos")}
      >
        <CustomText style={styles.btnText}>Ver Favoritos</CustomText>
        <AntDesign name="arrowright" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
