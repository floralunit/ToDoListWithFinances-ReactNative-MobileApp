import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Main,
    padding: 15,
  },

  card: {
    backgroundColor: COLORS.MainLighter,
    padding: 15,
    marginVertical: 6,
    borderRadius: 8,
  },

  text: {
    color: COLORS.Primary,
    fontSize: 16,
  },

  input: {
    backgroundColor: COLORS.MainLighter,
    color: COLORS.Primary,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },

  button: {
    backgroundColor: COLORS.Secondary,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },

  buttonText: {
    color: COLORS.Main,
    fontWeight: "bold",
  },
});
