import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  cardStyle: {
    card: {
      borderRadius: 20,
      backgroundColor: "white",
      marginHorizontal: 5,
      marginVertical: 5,
      elevation: 4,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      padding: 10,
      maxHeight: 380,
      maxWidth: 400,
    },
    imageContainer: {
      position: "relative",
      borderRadius: 10,
      overflow: "hidden",
    },
    favorite: {
      position: "absolute",
      top: 10,
      left: 10,
      zIndex: 1,
      height: 28,
      width: 28,
      backgroundColor: "#fc6c61",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 30,
    },
    image: {
      flex: 1,
    },
    itemDetails: {
      padding: 10,
      flexDirection: "column",
    },
    itemName: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 5,
    },
    itemDescription: {
      fontSize: 14,
      marginBottom: 15,
      color: "#bebec1",
      maxHeight: 50,
    },
    priceDetails: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    itemPrice: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#8d8d97",
    },
    addButton: {
      backgroundColor: "black",
      borderRadius: 50,
      width: 20,
      height: 20,
      alignItems: "center",
      justifyContent: "center",
    },
  },
  BestSellerCardStyle: {
    container: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      padding: 10,
      marginVertical: 4,
      backgroundColor: "#fff",
      borderRadius: 10,
      shadowColor: "#000",
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      maxWidth: 600,
      alignSelf: "center",
    },
    imageContainer: {
      borderRadius: 15,
      overflow: "hidden",
      width: 100,
      height: 100,
    },
    image: {
      flex: 1,
      width: "100%",
      height: "100%",
    },
    infoContainer: {
      flex: 1,
      marginHorizontal: 20,
    },
    name: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 5,
    },
    description: {
      fontSize: 14,
      marginBottom: 5,
      color: "#bebec1",
    },
    price: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#8d8d97",
    },
    icon: {
      flexDirection: "column",
      alignSelf: "flex-end",
      marginLeft: 10,
    },
  },
  searchBarStyle: {
    container: {
      flexDirection: "row",
      alignItems: "center",

      justifyContent: "space-between",
    },
    searchBar: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 10,
      paddingRight: 10,
      maxWidth: "85%",
      paddingVertical: 6,
      marginVertical: 10,
      elevation: 4,
    },
    searchIcon: {
      paddingLeft: 10,
    },
    searchInput: {
      flex: 1,
      fontSize: 16,
      paddingLeft: 10,
      color: "gray",
    },
    cartIcon: {
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: 4,
    },
    badge: {
      backgroundColor: "red",
      borderRadius: 10,
      width: 10,
      height: 10,
      position: "absolute",
      top: -2,
      left: -2,
    },
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitleContainer: {
    marginVertical: 8,
    marginHorizontal: 6,
  },
  sectionTitleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  app: {
    container: {
      flex: 1,
      backgroundColor: "#F5F6FA",
    },
    contentContainer: {
      flex: 1,
      alignItems: "center",
      marginHorizontal: "5%",
    },

    bodyContainer: {
      flex: 1,
      width: "100%",
    },

    cardListContainer: {
      minHeight: 250,
    },
    cardListContentContainer: {
      maxHeight: 300,
      borderTopWidth: 1,

      marginVertical: 15,
    },
    bestSellerCard: {
      marginTop: 20,
    },
  },
});
