import "nativewind";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Modal,
  ActivityIndicator,
} from "react-native";
import Header from "../../components/Header/Back_Header";
import outcomes from "./Result.json";
import normal from "../../../assets/images/default.jpg";
import singlestory from "../../../assets/images/singlestory.png";
import twostory from "../../../assets/images/twostory.png";
import threestory from "../../../assets/images/threestory.png";
import more from "../../../assets/images/more.png";
import { generateImage } from "../../api/GenerateImage";

// Map answer options to image imports
const images = {
  "Single Story": singlestory,
  "Two Stories": twostory,
  "Three Stories": threestory,
  "More than Three Stories": more,
};

const Result = ({ navigation, route }) => {
  const userAnswers = route.params?.answers;
  const [imageUri, setImageUri] = useState(null);
  const [loading, setLoading] = useState(false);

  // Debugging - Log the received user answers
  console.log("Received userAnswers:", userAnswers);
  useEffect(() => {
    getUserImage();
  }, []);

  const getUserImage = async () => {
    setLoading(true);
    try {
      const response = await generateImage(userAnswers);
      console.log("response of appi", response);
      if (response.success) {
        setImageUri(response.imageUrl);
      } else {
        setError(response.error || "Failed to generate image.");
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const getMatchingResult = (answers) => {
    return (
      outcomes.find(
        (outcome) => outcome.outcome.floors === answers.answer // Match based on floors
      ) || {
        image: normal,
        description: "No match found. Please review your selections.",
        details: {
          keyFeatures: [],
          functionalHighlights: [],
          usability: [],
          customizationOptions: [],
        },
      }
    );
  };

  // Find the matching result based on user answers
  const result = userAnswers ? getMatchingResult(userAnswers) : null;

  // Determine the image to show
  const resultImage = images[userAnswers?.answer] || normal;

  // Debugging - Log the selected image
  console.log("Selected image:", resultImage);

  return (
    <View className="h-full w-full flex bg-[#F7F4F2]">
      <Header
        title="Matching Design"
        navigation={navigation}
        custom_css="px-6"
      />
      {loading && (
        <View className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <ActivityIndicator size="large" color="#ffffff" />
          <Text className="text-white text-lg mt-4">Generating Design...</Text>
        </View>
      )}
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        <View className="flex flex-col items-center justify-center py-[6rem] px-6">
          {result ? (
            <>
              {imageUri ? (
                <Image
                  source={{ uri: imageUri }}
                  className="h-[300px] w-full rounded-lg"
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={resultImage}
                  className="h-[300px] w-full rounded-lg"
                  resizeMode="contain"
                />
              )}
              <Text className="text-center text-lg font-bold mt-4">
                {result.description}
              </Text>
            </>
          ) : (
            <Text className="text-center text-lg font-bold mt-4">
              {userAnswers
                ? "No matching result found."
                : "No answers provided in the route."}
            </Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Result;
