import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    backgroundColor: "#509F60",
    padding: 15,
    borderBottomColor: "#316e3c",
    borderBottomWidth: 2,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  headerText: { fontSize: 20, color: "#fff" },
  backArrow: { alignItems: "center" },
  addressText: {
    fontSize: 18,
  },
  mainInfoContainer: {
    marginVertical: 20,
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
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
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
    justifyContent: "center",
    padding: 10,
    marginVertical: 20,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 20,
    borderColor: "#ccc",
    borderWidth: 2,
    flexShrink: 1,
  },
  imagesContainer: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  contact: {
    alignItems: "center",
  },
  contactIconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "50%",
    marginVertical: 20,
  },
  free: {
    backgroundColor: "#509F60",
    padding: 10,
    color: "#fff",
    fontSize: 16,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#316e3c",
  },
  paid: {
    backgroundColor: "#cb2905",
    padding: 10,
    color: "#fff",
    fontSize: 16,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#850000",
  },
  valueContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  value: {
    marginBottom: 5,
  },
});
