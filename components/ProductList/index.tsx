import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableNativeFeedback } from "react-native";
import { Product } from "../../type";

export type ProductProps = {
  product: Product;
};

const ProductListItem = (props: ProductProps) => {
  const { product } = props;
  const picture = product.imageUri;
  console.log(picture);
  return (
    <View style={{ alignItems: "center" }}>
      <View>
      <Image source={require("")} />
        <View>
          <Text>{product.name}</Text>
          <Text>{product.shopName}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductListItem;
