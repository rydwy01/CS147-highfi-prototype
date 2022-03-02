import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/logo.png")}
        style={styles.image}
      />
    </View>
  );
};

export default Logo;
