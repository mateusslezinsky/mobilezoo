import { TouchableOpacity, View, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import CustomText from "../../components/text/text.component";
import Card from "../../components/card/card.component";

import { data } from "../../data/data.json";

import { styles } from "./lista.styles";

export default function Lista({ navigation }) {
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
          <CustomText style={styles.headerText}>Lista de Parques</CustomText>
        </View>
      </View>
      <ScrollView>
        {data.map((props) => (
          <Card key={props.id} navigation={navigation} {...props} />
        ))}
      </ScrollView>
    </View>
  );
}
