import {
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Linking,
} from "react-native";

import CustomText from "../../components/text/text.component";
import { AntDesign } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";

import { styles } from "./details.styles";
import { useEffect, useState } from "react";

import { data } from "../../data/data.json";

export default function Details({ navigation, route }) {
  const [cardDetails, setCardDetails] = useState(null);
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    data.find((props) => {
      if (props.id === route.params.id) {
        setCardDetails({
          ...props,
        });
      }
    });
  }, []);

  const openMap = () => {
    const scheme = Platform.select({
      ios: "maps://0,0?q=",
      android: "geo:0,0?q=",
    });
    const latLng = `${cardDetails.coordinates.latitude},${cardDetails.coordinates.longitude}`;
    const label = cardDetails.name;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      {cardDetails ? (
        <View>
          <View style={styles.topContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("lista")}
              style={styles.backArrow}
            >
              <AntDesign name="arrowleft" size={30} color="black" />
            </TouchableOpacity>
            <CustomText style={styles.headerText}>
              {cardDetails.name}
            </CustomText>
            <View>
              <TouchableOpacity
                onPress={() => setIsFavourite(!isFavourite)}
                style={styles.backArrow}
              >
                {isFavourite ? (
                  <AntDesign name="star" size={24} color="#c2b800" />
                ) : (
                  <AntDesign name="staro" size={24} color="#c2b800" />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView style={styles.mainInfoContainer}>
            <CustomText style={styles.addressText}>
              Este parque está localizado em
            </CustomText>
            <TouchableOpacity onPress={openMap}>
              <CustomText style={styles.addressStreet}>
                {cardDetails.address}
              </CustomText>
            </TouchableOpacity>
            <MapView style={styles.map} region={cardDetails.coordinates}>
              <Marker coordinate={cardDetails.coordinates} />
            </MapView>
            <View style={styles.workingTime}>
              <AntDesign name="clockcircleo" size={20} color="white" />
              <CustomText
                style={{ fontSize: 18, flexShrink: 1, color: "#fff" }}
              >
                O parque funciona das {cardDetails.workingTime}
              </CustomText>
            </View>
            <View style={styles.websiteContainer}>
              <TouchableOpacity
                style={styles.websiteBtn}
                onPress={() => Linking.openURL(cardDetails.websiteURL)}
              >
                <CustomText style={styles.websiteBtnText}>
                  Acessar o site
                </CustomText>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
}
