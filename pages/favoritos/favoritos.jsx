import { useEffect, useContext } from "react";
import { TouchableOpacity, View, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import CustomText from "../../components/text/text.component";
import Card from "../../components/card/card.component";

import { data } from "../../data/data.json";

import { styles } from "./favoritos.styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { FavouritesContext } from "../../providers/favourites.provider";

export default function Favoritos({ navigation }) {
  const { favourites, setFavourites } = useContext(FavouritesContext);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate("home")}
            style={styles.backArrow}
          >
            <AntDesign name="arrowleft" size={30} color="white" />
          </TouchableOpacity>
          <CustomText style={styles.headerText}>
            Meus Parques Favoritos
          </CustomText>
        </View>
      </View>
      <ScrollView>
        {favourites.map((props) => (
          <Card key={props.id} navigation={navigation} {...props} />
        ))}
      </ScrollView>
    </View>
  );
}
