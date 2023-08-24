import { Image, View } from "react-native";

import CustomText from "../text/text.component";
import { styles } from "./card.styles";

export default function Card({ name, location, imageURL }) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.parkTitleContainer}>
        <CustomText style={styles.parkTitle}>{name}</CustomText>
        <CustomText style={styles.parkSubtitle}>{location}</CustomText>
      </View>
      <Image
        style={styles.parkImage}
        source={{
          uri: imageURL,
        }}
      />
    </View>
  );
}
