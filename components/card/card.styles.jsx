import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    marginTop: 20,
    padding: 20,
    marginHorizontal: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#ccc",
    justifyContent: "space-between",
    alignItems: "center",
  },
  parkImage: {
    width: 110,
    height: 110,
    borderRadius: 10,
  },
  parkTitleContainer: {
    flexShrink: 1,
  },
  parkTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  parkSubtitle: {
    fontSize: 16,
    color: "#579cd1",
  },
});
