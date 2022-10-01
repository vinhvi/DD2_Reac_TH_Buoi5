import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";
import { Product } from "../../type";

export type ProductProps = {
  product: Product;
};

const press = function () {
  console.log("hello");
};

const ProductListItem = (props: ProductProps) => {
  const { product } = props;
  const image = '../ga_bo_toi.jpg';
  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <Image source={require(image)} style={styles.image} />
        <View>
          <Text style={{marginTop:10,}}>{product.name}</Text>
          <Text style={{marginTop:20,fontWeight:'bold',}}>Shop {product.shopName}</Text>
        </View>
      </View>
      <TouchableHighlight
          onPress={press}
          style={{
            backgroundColor: "red",
            width: 80,
            height: 30,
            alignItems:"center",
            marginRight:30,
            marginTop:5,
          }}
        >
          <Text style={styles.bottom}>Chat</Text>
        </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    marginTop: 10,
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'gray',
    alignItems:'center',
  },
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
   
  },
  image: {
    borderColor: "red",
    height: 100,
    width: 100,
  },
  bottom: {
    marginTop:4,
    color: "white",
  },
});

export default ProductListItem;
