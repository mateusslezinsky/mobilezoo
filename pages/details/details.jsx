import {
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
  FlatList,
  Dimensions,
} from "react-native";

import CustomText from "../../components/text/text.component";
import { AntDesign, Foundation, MaterialIcons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import YoutubePlayer from "react-native-youtube-iframe";

import { styles } from "./details.styles";
import { useEffect, useState, useContext } from "react";

import { data } from "../../data/data.json";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { FavouritesContext } from "../../providers/favourites.provider";

export default function Details({ navigation, route }) {
  const [cardDetails, setCardDetails] = useState(null);
  const [isFavourite, setIsFavourite] = useState(false);
  const { favourites, setFavourites } = useContext(FavouritesContext);

  function searchParkInFavourites(parkId) {
    // console.log("busca");
    return getFavourites().then(() => {
      favourites.forEach((id) => {
        if (parkId == id) {
          return true;
        }
      });
    });
  }

  const toggleFavourite = (idPark) => {
    // AsyncStorage.setItem('favoriteParks', JSON.stringify(favourites.filter(id => id !== idPark)));
    // AsyncStorage.getItem('favoriteParks').then(
    //     favoriteParks =>
    //         this.setState({favoriteParks: JSON.parse(favoriteParks)})
    // );
    // console.log(favoriteParks);
    // AsyncStorage.setItem('favoriteParks', favoriteParks);
    // this.setState({textInputData: ''});
  };

  useEffect(() => {
    data.find((props) => {
      if (props.id === route.params.id) {
        setCardDetails({
          ...props,
        });
      }
    });
  }, []);

  useEffect(() => {
    if (isFavourite) {
      const currentCard = data.find((props) => props.id === route.params.id);
      const filteredFavourites = favourites.filter(
        (el) => el.id !== parseInt(route.params.id)
      );
      setFavourites([...filteredFavourites, currentCard]);
    }
    /* if (isFavourite) {
      (async () => {
        try {
          const prevString = await AsyncStorage.getItem("favoriteParks");
          const prevValue = JSON.parse(prevString);
          setFavourites()
          if (prevValue) {
            const parksArray = [...prevValue, cardDetails];
            const jsonValue = JSON.stringify(parksArray);
            await AsyncStorage.setItem("favoriteParks", jsonValue);
          } else {
            const parksArray = [cardDetails];
            const jsonValue = JSON.stringify(parksArray);
            await AsyncStorage.setItem("favoriteParks", jsonValue);
          }
        } catch (err) {
          console.error(err);
        }
      })();
    } else {
      (async () => {
        try {
          const prevString = await AsyncStorage.getItem("favoriteParks");
          const prevValue = JSON.parse(prevString);
          const setNewArr = prevValue.filter(
            (park) => park.id !== parseInt(route.params.id)
          )
        } catch (err) {
          console.error(err);
        }
      })();
    } */
  }, [isFavourite]);

  const Item = (item) => (
    <View style={styles.cardContainer}>
      <Image style={styles.parkImage} source={{ uri: item["title"].url }} />
    </View>
  );

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
  const snapGrid = Dimensions.get("window").width - 21;
  return (
    <View style={styles.container}>
      {cardDetails ? (
        <>
          <View style={styles.topContainer}>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => navigation.navigate("lista")}
                style={styles.backArrow}
              >
                <AntDesign name="arrowleft" size={30} color="white" />
              </TouchableOpacity>
              <CustomText style={styles.headerText}>
                {cardDetails.name}
              </CustomText>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setIsFavourite(!isFavourite);
                  }}
                  style={styles.backArrow}
                >
                  {isFavourite ? (
                    <AntDesign name="star" size={30} color="#fff" />
                  ) : (
                    <AntDesign name="staro" size={30} color="#fff" />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <ScrollView style={styles.mainInfoContainer}>
            <CustomText style={styles.addressText}>
              Veja fotos do parque:
            </CustomText>
            <View>
              <FlatList
                horizontal
                data={cardDetails.pics}
                renderItem={({ item }) => <Item title={item} />}
                keyExtractor={(item) => item.id}
                snapToInterval={snapGrid}
                decelerationRate={"fast"}
              />
            </View>
            <View style={styles.video}>
              <YoutubePlayer
                height={Dimensions.get("window").height * 0.27}
                play={false}
                videoId={cardDetails.embeddedVideoId}
              />
            </View>
            <CustomText style={styles.addressText}>
              Este parque está localizado em
            </CustomText>
            <TouchableOpacity onPress={openMap}>
              <CustomText style={styles.addressStreet}>
                {cardDetails.address}{" "}
                <AntDesign name="arrowright" size={16} color="#579cd1" />
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
            <View style={styles.valueContainer}>
              <CustomText style={styles.value}>Valor</CustomText>
              <View
                style={
                  cardDetails.price === "Gratuito" ? styles.free : styles.paid
                }
              >
                <TouchableOpacity
                  onPress={() => {
                    if (cardDetails.priceLink) {
                      Linking.openURL(cardDetails.priceLink);
                    }
                  }}
                >
                  <CustomText style={{ color: "#fff" }}>
                    {cardDetails.price}
                  </CustomText>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.contact}>
              <CustomText>Contato</CustomText>
              <View style={styles.contactIconContainer}>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(`tel:${cardDetails.telephone}`)
                  }
                >
                  <Foundation name="telephone" size={30} color="#007918" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`mailto:${cardDetails.email}`)}
                >
                  <MaterialIcons name="email" size={30} color="#4d4d4d" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Linking.openURL(cardDetails.facebook)}
                >
                  <AntDesign name="facebook-square" size={30} color="#0B8AF0" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.websiteContainer}>
              <TouchableOpacity
                style={styles.websiteBtn}
                onPress={() => Linking.openURL(cardDetails.websiteURL)}
              >
                <CustomText style={styles.websiteBtnText}>
                  Acessar o site
                </CustomText>
                <AntDesign name="arrowright" size={16} color="#fff" />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </>
      ) : (
        <></>
      )}
    </View>
  );
}
