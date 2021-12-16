import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import Api from "../../Services/Api";
import { Ionicons } from "@expo/vector-icons";
import { Card } from "react-native-elements";
import { StackActions } from "@react-navigation/native";
import {Badge,withBadge } from "react-native-elements";

export default function Home({ navigation }) {
  const [produtos, setProdutos] = useState([]);

  useEffect(async () => {
    await Api.get("/produto/").then((response) => {
      setProdutos(response.data);
    });
  }, []);

  return (
    <>
      <View
        style={styles.navTopo}
      >
        <Badge
          value="2"
          status="error"
          containerStyle={styles.badge}
        />
        <Text style={styles.iconsMenuDireita}>
          <Ionicons
            name="cart-outline"
            size={24}
            color="white"
            onPress={() => {
              navigation.navigate("Carrinho");
            }}
          />
          {"    "}
          <Ionicons
            name="exit-outline"
            size={24}
            color="white"
            onPress={() => navigation.dispatch(StackActions.popToTop())}
          />
        </Text>
      </View>
      <ScrollView>
        <Card>
          {produtos.map((produto) => {
            return (
              <TouchableOpacity
                key={produto.id}
                style={styles.touchbleOpacity}
                onPress={() => {
                  navigation.navigate("Detalhe", { id: produto.id });
                }}
              >
                <Image
                  style={styles.produtoImage}
                  resizeMode="cover"
                  source={{ uri: produto.fotoLink }}
                />
                <View style={styles.cardText}>
                  <Text style={styles.textProduto}>{produto.nome}</Text>
                  <Text style={styles.textProdutoValor}>
                    R$ {produto.valor}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </Card>
      </ScrollView>
    </>
  );
}
