import { memo } from "react";
import { View, Pressable } from "react-native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { style } from "../styles/appStyle";

const HeaderComponent = memo(() => {
  return (
    <View style={style.headerContainer}>
      <Pressable>
        <MaterialCommunityIcons name="account-box" size={30} />
      </Pressable>
      <Pressable>
        <Entypo name="text" size={30} />
      </Pressable>
    </View>
  );
});
export default HeaderComponent;
