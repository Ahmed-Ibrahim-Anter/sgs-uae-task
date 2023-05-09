import React from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  View,
  Dimensions,
} from "react-native";
import Card from "./component/Card";
import SearchBar from "./component/SearchBar";
import BestSellerCard from "./component/BestSellerCard";
import { useFurnitureItems } from "./hook/furnitureItems";
import HeaderComponent from "./component/HeaderComponent";
import TitleComponent from "./component/TitleComponent";
import { style } from "./styles/appStyle";
const windowWidth = Dimensions.get("window").width;

export default function App() {
  const styles = style.app;
  const furnitureItems = useFurnitureItems();
  const handlePress = React.useCallback(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#F5F6FA"
        barStyle="dark-content"
      />
      <View style={styles.contentContainer}>
        <HeaderComponent />
        <View style={styles.bodyContainer}>
          <SearchBar hasCartItems={true} />
          <TitleComponent text="Explore" />
          <View style={styles.cardListContainer}>
            <FlatList
              horizontal={true}
              data={furnitureItems}
              renderItem={({ item }) => <Card item={item} />}
              keyExtractor={(item) => "#" + item.id}
              contentContainerStyle={styles.cardListContentContainer}
              initialNumToRender={Math.ceil(windowWidth / 120)}
              removeClippedSubviews={true}
            />
          </View>
          <TitleComponent text="Best Sellers" />
          <View style={[styles.bestSellerCard, { width: windowWidth - 40 }]}>
            <BestSellerCard item={furnitureItems[4]} onPress={handlePress} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
