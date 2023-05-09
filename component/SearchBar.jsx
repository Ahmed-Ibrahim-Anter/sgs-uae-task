import React, { useCallback, memo } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { style } from "../styles/appStyle";

const SearchBar = memo(({ hasCartItems }) => {
  const handleInputChange = useCallback(() => {}, []);
  const styles = style.searchBarStyle;
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableOpacity style={styles.cartIcon}>
        <Ionicons name="cart-outline" size={28} color="black" />
        <View
          style={[
            styles.badge,
            { backgroundColor: hasCartItems ? "red" : "transparent" },
          ]}
        />
      </TouchableOpacity>
      <View style={[styles.searchBar]}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="gray"
          underlineColorAndroid="transparent"
          onChangeText={handleInputChange}
        />
        <Ionicons
          style={styles.searchIcon}
          name="search-outline"
          size={24}
          color="gray"
        />
      </View>
    </KeyboardAvoidingView>
  );
});

export default SearchBar;
