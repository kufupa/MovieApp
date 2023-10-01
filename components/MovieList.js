import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
// import { moviesData } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { baseImagePath } from "../api/tmdb";
import { styles } from "../theme";
const { width, height } = Dimensions.get("window");
import { SIZES } from "../constants";
import tw from "twrnc";

export default function MovieList({ title, data }) {
  const navigation = useNavigation();

  const handleClick = (item) => {
    navigation.navigate("MovieScreen", item);
  };

  return (
    <View
      // style={tw`mb-8 space-y-4"
      style={{
        marginBottom: 8,
        marginVertical: 4,
        backgroundColor: "black",
      }}>
      <View
        // style={tw`mx-4 flex-row justify-between items-center"
        style={{
          marginHorizontal: 4,
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
        }}>
        <Text
          // style={tw`text-white text-lg"
          style={{
            color: "white",
            fontSize: 20,
          }}>
          {title}
        </Text>
        {/* {!hideSeeAll && ( */}
        {/* <TouchableOpacity>
          <Text
            style={[styles.text, { fontSize: 17 }]}
            // style={tw`text-lg"
          >
            See All
          </Text>
        </TouchableOpacity> */}
        {/* )} */}
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}>
        {data.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.navigate("MovieScreen", item)}>
              <View
              // style={tw`space-y-1 mr-4`}
              >
                <Image
                  // source={require("../assets/images/LegoNinjagoMoviePoster.jpg")}
                  source={{ uri: baseImagePath(item.poster_path) }}
                  // style={tw`rounded-3xl"
                  style={{
                    width: width * 0.33,
                    height: height * 0.22,
                    borderRadius: 20,
                    marginHorizontal: 4,
                  }}
                />
                <Text
                  // style={tw`text-neutral-300 ml-1"
                  style={{
                    color: "#AAAAAA",
                    alignItems: "center",
                    width: width * 0.33,
                    fontWeight: "bold",
                  }}>
                  {item.title.length > 14
                    ? item.title.slice(0, 11) + "..."
                    : item.title}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
}
