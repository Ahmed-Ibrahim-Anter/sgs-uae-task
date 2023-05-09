import { memo } from "react";
import { View, Text } from "react-native";
import { style } from "../styles/appStyle.js";

const TitleComponent = memo(({ text }) => {
  return (
    <View style={style.sectionTitleContainer}>
      <Text style={style.sectionTitleText}>{text}</Text>
    </View>
  );
});
export default TitleComponent;
