import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8bc497",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
  logo: {
    width: 300,
    height: 300,
  },
  btnContainer: {
    flexWrap: "nowrap",
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#509F60",
    borderWidth: 2,
    borderColor: "#316e3c",
    borderRadius: 20,
    padding: 20,
  },
  btnText: {
    color: "#fff",
  },
});
