import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import ProductItem from "../screen/ProductListScreen1";
import { FontAwesome, Ionicons, AntDesign } from "@expo/vector-icons";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductItem"
        component={ProductItem}
        options={({ route }) => ({
          title: "",
          header: () => (
            <View>
              <View
                style={{
                  backgroundColor: "#1BA9FF",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: 395,
                  height: 50,
                  marginTop: 40,
                }}
              >
                <Ionicons name="arrow-back-outline" size={30} color="white" />
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  Chat
                </Text>
                <AntDesign name="shoppingcart" size={30} color="white" />
              </View>
              <View
                style={{ alignItems: "center", backgroundColor: "#E5E5E5" }}
              >
                <Text style={{ textAlign: "center", fontSize: 18 }}>
                  Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
                </Text>
              </View>
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  );
};
export default MainNavigator;
