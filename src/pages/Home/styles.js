import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  navTopo: {
    width: "100%",
    height: "10%",
    backgroundColor: "#583479"
  },
  badge: {
    position: "absolute",
    right: "15%",
    top: "10%"
  },
  iconsMenuEsquerda: {
    position: "absolute",
    left: "5%",
    top: "20%"
  },
  iconsMenuDireita: {
    position: "absolute",
    right: "5%",
    top: "25%",
    color: "white",
    fontSize: 20
  },
  touchbleOpacity:
  {
    width: "100%",
    height: 200,
    flexDirection: "row"
  },
  produtoImage: {
    width: "33%",
    height: 150
  },
  cardText: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  textProduto: {
    marginBottom: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  textProdutoValor: {
    fontSize: 24,
    fontWeight: "200"
  }




});