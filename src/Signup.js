import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import Background from "./Background";
import Btn from "./Btn";
import { darkGreen } from "./Constants";
import Field from "./Field";

const { width, height } = Dimensions.get("window");

const Signup = (props) => {
  return (
    <Background>
      <View style={{ width, height }}>
        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
            marginTop: 120,
            flex: 0.1,
            textAlign: "center",
          }}
        >
          Welcome On Board
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 19,
            fontWeight: "bold",
            // marginBottom: 10,
            textAlign: "center",
          }}
        >
          Let’s help you meet up your tasks
        </Text>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Field placeholder="Full Name" />
          <Field
            placeholder="Email / Username"
            keyboardType={"email-address"}
          />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "78%",
              paddingRight: 16,
            }}
          >
            <Text style={{ color: "white", fontSize: 16 }}>
              By signing in, you agree to our{" "}
            </Text>
            <Text
              style={{
                color: "yellow",
                fontWeight: "bold",
                fontSize: 13,
                textAlign: "center",
              }}
            >
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              width: "78%",
              paddingRight: 16,
              marginBottom: 10,
            }}
          >
            <Text style={{ color: "white", fontSize: 16 }}>and </Text>
            <Text style={{ color: "yellow", fontWeight: "bold", fontSize: 16 }}>
              Privacy Policy
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Signup"
            Press={() => {
              alert("Account created");
              props.navigation.navigate("Login");
            }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
              Already have an account ?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text
                style={{ color: "yellow", fontWeight: "bold", fontSize: 16 }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
