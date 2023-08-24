import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    flex: 2,
  },
  backArrow: { flex: 1, alignItems: "center" },
  cardContainer: {
    flexDirection: "row",
    marginVertical: 20,
    padding: 20,
    marginHorizontal: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#ccc",
    justifyContent: "space-around",
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