import { Text, StyleSheet, View, FlatList } from "react-native";
import React, { Component } from "react";
import product from "../data/Product";
import ProductListItem from "../components/ProductList";

export default class ProductListScreen1 extends Component {
  render() {
    return (
      <FlatList
        data={product}
        renderItem={({ item }) => <ProductListItem product={item} />}
      />
    );
  }
}

const styles = StyleSheet.create({});
