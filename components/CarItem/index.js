import React from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from "./styles";

function CarItem() {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelS.jpeg")}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Staring at $69,420</Text>
      </View>
    </View>
  );
}

export default CarItem;
