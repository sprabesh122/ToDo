import React, { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import Background from "./Background";
import Btn from "./Btn";
import { darkGreen, green } from "./Constants";
import Field from "./Field";

const { width, height } = Dimensions.get("window");

const Login = (props) => {
  return (
    <Background>
      <View style={{ width, height }}>
        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
            marginTop: 120,
            marginBottom: 10,
            flex: 0.1,
            textAlign: "center",
          }}
        >
          Welcome Back!
        </Text>
        <Image
          source={require("./assets/ThirdPage.jpg")}
          style={{
            width: 174.54,
            height: 176,
            marginHorizontal: 110,
            // marginVertical: 30,
            marginBottom: 40,
            borderRadius: 60,
          }}
        />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Field
            placeholder="Email / Username"
            keyboardType={"email-address"}
          />
          <Field placeholder="Password" secureTextEntry={true} />
          <View
            style={{
              alignItems: "flex-end",
              width: "78%",
              paddingRight: 16,
              marginBottom: 100,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Forgot Password ?
            </Text>
          </View>
          <View style={{ marginBottom: 20 }}>
            {/* <Btn
              textColor="white"
              bgColor={darkGreen}
              btnLabel="Login"
              Press={() => alert("Logged In")}
            /> */}

            <Text style={{}}>
              <View>
                <Btn
                  bgColor={green}
                  textColor="white"
                  btnLabel="Login"
                  Press={() => props.navigation.navigate("Todo")}
                />
              </View>
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "white" }}
              >
                Don't have an account ?{" "}
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Signup")}
              >
                <Text
                  style={{ color: "yellow", fontWeight: "bold", fontSize: 16 }}
                >
                  Signup
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
