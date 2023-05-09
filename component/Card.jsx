import { memo } from "react";
import { Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { style } from "../styles/appStyle";

const { width } = Dimensions.get("window");

const Card = memo(({ item }) => {
  const itemWidth = width * 0.5;
  const styles = style.cardStyle;
  return (
    <View style={[styles.card, { width: itemWidth }]}>
      <View
        style={[
          styles.imageContainer,
          { maxHeight: itemWidth, height: itemWidth * 0.7 },
        ]}
      >
        <TouchableOpacity style={styles.favorite}>
          <Ionicons name="ios-heart-sharp" size={18} color="#fff" />
        </TouchableOpacity>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: item.image }}
        />
      </View>
      <View style={[styles.itemDetails, { maxHeight: itemWidth * 0.7 }]}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <View style={styles.priceDetails}>
          <TouchableOpacity style={styles.addButton}>
            <Feather name="plus" size={12} color="white" />
          </TouchableOpacity>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        </View>
      </View>
    </View>
  );
});

export default Card;
