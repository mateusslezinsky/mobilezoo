import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#ccc",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
  parkImage: {
    width: 160,
    height: 140,
    borderRadius: 20,
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
