import { Image, TouchableOpacity, View } from "react-native";

import CustomText from "../text/text.component";
import { styles } from "./card.styles";
import { useEffect } from "react";

export default function Card({ name, location, imageURL, navigation, id }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("details", { id: id })}
    >
      <View style={styles.cardContainer}>
        <Image style={styles.parkImage} source={{ uri: imageURL }} />
        <View style={styles.parkTitleContainer}>
          <CustomText style={styles.parkTitle}>{name}</CustomText>
          <CustomText style={styles.parkSubtitle}>{location}</CustomText>
        </View>
      </View>
    </TouchableOpacity>
  );
}
