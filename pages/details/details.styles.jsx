import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  headerText: { fontSize: 18 },
  backArrow: { alignItems: "center" },
  addressText: {
    fontSize: 18,
  },
  mainInfoContainer: {
    marginVertical: 30,
    marginHorizontal: 15,
    height: "90%",
  },
  addressStreet: {
    fontSize: 18,
    color: "#579cd1",
    marginVertical: 15,
    fontWeight: "600",
  },
  map: {
    width: "100%",
    height: 200,
    borderColor: "#ccc",
    borderWidth: 2,
    borderRadius: 10,
  },
  favIcon: {
    borderColor: "#000",
    borderWidth: 1,
  },
  websiteContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  websiteBtn: {
    backgroundColor: "#509F60",
    borderColor: "#316e3c",
    borderWidth: 2,
    padding: 20,
    borderRadius: 20,
  },
  websiteBtnText: {
    color: "#fff",
    fontSize: 20,
  },
  workingTime: {
    flexDirection: "row",
    borderRadius: 20,
    gap: 15,
    backgroundColor: "#509F60",
    borderColor: "#316e3c",
    alignItems: "center",
    padding: 10,
    marginVertical: 20,
  },
  image: {
    width: "100%",
    height: "50%",
    marginVertical: 10,
    borderRadius: 20,
    borderColor: "#ccc",
    borderWidth: 2,
  },
});
