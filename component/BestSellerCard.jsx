import { memo } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Pressable,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { style } from "../styles/appStyle";

const { width } = Dimensions.get("window");

const BestSellerCard = memo(({ item, onPress }) => {
  const styles = style.BestSellerCardStyle;
  const { image, name, description, price } = item;
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, { width: width * 0.9 }]}>
        <TouchableOpacity style={styles.icon} onPress={onPress}>
          <MaterialCommunityIcons name="arrow-right-box" size={26} />
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={{ uri: image }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </View>
    </Pressable>
  );
});

export default BestSellerCard;
