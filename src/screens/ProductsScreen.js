import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  View, Text, Image, TextInput
} from 'react-native';
import React, { useEffect} from 'react';
import store from '../redux/store';
import {useSelector, useDispatch} from 'react-redux';
import { getUserProducts } from '../redux/actions/userActions';
import ProductItem from '../components/ProductItem';
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import Header from "../components/Header";
import Tags from "../components/Tags";
import ProductCard from "../components/ProductCard";

export default function ProductsScreen({navigation}) {
  const products = useSelector(state => state.userReducer.products);
  const dispatch = useDispatch();
  // const navigation = useNavigation();
  const handleProductDetails = (item) => {
    navigation.navigate("PRODUCT_DETAILS", { item });
  };
  useEffect(() => {
    console.log('store', store);
    dispatch(getUserProducts());
  }, []);

  const renderProduct = ({item}) => {
  return (  <ProductItem 
    navigation={navigation}
    name={item.name}
    price={item.price}
    offerPrice={item.offer_price}
    id={item.id}
    />)
   
  };

  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <>
              <Header />
              <View>
                <Text style={styles.headingText}>Match Your Style</Text>
                <View style={styles.inputContainer}>
                  <Image
                    source={require("../assets/search.png")}
                    style={styles.searchIcon}
                  />
                  <TextInput placeholder="Search" style={styles.textInput} />
                </View>
              </View>
            </>
            <Tags />
          </>
        }
        data={products}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            handleProductClick={handleProductDetails}
            toggleFavorite={() => {}}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
  },

  headingText: {
    fontSize: 28,
    color: "#000000",
    marginVertical: 20,
    fontFamily: "Poppins-Regular",
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row",
  },
  searchIcon: {
    height: 26,
    width: 26,
    marginHorizontal: 12,
  },
  textInput: {
    fontSize: 18,
    fontFamily: "Poppins-Regular",
  },
});


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },

// });
