import React from "react";
import { View, StyleSheet, Text, Dimensions, Image } from "react-native";
import Background from "./Background";
import Btn from "./Btn";
import { darkGreen, green } from "./Constants";

const Home = (props) => {
  return (
    <View style={{ backgroundColor: "#ADDEDB" }}>
      <View style={{ marginHorizontal: 25, marginVertical: 150 }}>
        <Image
          source={require("./assets/FirstPage.jpg")}
          style={{
            width: 174.54,
            height: 176,
            marginHorizontal: 80,
            marginVertical: 25,
            borderRadius: 40,
          }}
        />
        <Text
          style={{
            marginHorizontal: 25,
            color: "black",
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 40,
          }}
        >
          Get things done with TODo
        </Text>
        <Text style={{ color: "black", fontSize: 16, marginBottom: 42 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames lectus
          fermentum ultrices ipsum ornare id lorem vestibulum, congue. Quis
          nulla vel consectetur ultrices. Nulla est faucibus mollis faucibus sed
          libero amet. Facilisis ut arcu facilisis egestas iaculis nec sit.
          Donec adipiscing ac massa egestas.
        </Text>

        <Text style={{ marginLeft: 43 }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#2E9E95",
              borderRadius: 100,
            }}
          >
            <Btn
              bgColor={green}
              textColor="white"
              btnLabel="Get Started"
              Press={() => props.navigation.navigate("Login")}
            />
          </View>
        </Text>

        {/* <Btn
          bgColor="white"
          textColor={darkGreen}
          btnLabel="Signup"
          Press={() => props.navigation.navigate("Signup")}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
