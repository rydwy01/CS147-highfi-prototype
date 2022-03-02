import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";

const Buttons = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text>Create a New Trip</Text>
        <Image
          source={require("../../../assets/images/map.png")}
          style={styles.images}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Your Upcoming Trips</Text>
        <Image
          source={require("../../../assets/images/suitcase.png")}
          style={styles.images}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Review Past Trip</Text>
        <Image
          source={require("../../../assets/images/star.png")}
          style={styles.images}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
