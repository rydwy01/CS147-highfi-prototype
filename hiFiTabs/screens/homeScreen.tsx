import { View } from "../components/Themed";
import Welcome from "../components/homeScreenComps/welcome/welcome";
import Logo from "../components/homeScreenComps/logo/logo";
import Buttons from "../components/homeScreenComps/buttons/buttons";
import { userProps } from "../types";

const HomeScreen = () => {
  const user: userProps = {
    name: "Ryan",
  };
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ height: "10%", width: "100%" }}>
        <Logo />
      </View>
      <View
        style={{ height: "20%", width: "100%", backgroundColor: "blue" }}
      ></View>
      <View
        style={{ height: "70%", width: "100%", backgroundColor: "orange" }}
      ></View>
    </View>
  );
};

export default HomeScreen;
