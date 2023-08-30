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
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  headerText: {
    flex: 4,
    color: "#fff",
  },
  backArrow: { flex: 1 },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
    padding: 20,
    marginHorizontal: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#ccc",
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
