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
        <View className="flex flex-col items-center justify-center py-[6rem]">
          {result ? (
            <>
              {imageUri ? (
                <Image
                  source={{ uri: imageUri }}
                  className="h-[200px] w-[300px] rounded-lg"
                  resizeMode="cover"
                />
              ) : (
                <Image
                  source={resultImage}
                  className="h-[200px] w-[300px] rounded-lg"
                  resizeMode="cover"
                />
              )}
              <Text className="text-center text-lg font-bold mt-4">
                {result.description}
              </Text>
              <View className="mt-6 px-4">
                <Text className="text-lg font-semibold mb-2">
                  Key Features:
                </Text>
                {result.details.keyFeatures.length > 0 ? (
                  result.details.keyFeatures.map((feature, index) => (
                    <Text key={index} className="text-base text-gray-600">
                      - {feature}
                    </Text>
                  ))
                ) : (
                  <Text className="text-base text-gray-600">
                    No key features available.
                  </Text>
                )}

                <Text className="text-lg font-semibold mt-4 mb-2">
                  Functional Highlights:
                </Text>
                {result.details.functionalHighlights.length > 0 ? (
                  result.details.functionalHighlights.map(
                    (highlight, index) => (
                      <Text key={index} className="text-base text-gray-600">
                        - {highlight}
                      </Text>
                    )
                  )
                ) : (
                  <Text className="text-base text-gray-600">
                    No functional highlights available.
                  </Text>
                )}

                <Text className="text-lg font-semibold mt-4 mb-2">
                  Usability:
                </Text>
                {result.details.usability.length > 0 ? (
                  result.details.usability.map((item, index) => (
                    <Text key={index} className="text-base text-gray-600">
                      - {item}
                    </Text>
                  ))
                ) : (
                  <Text className="text-base text-gray-600">
                    No usability information available.
                  </Text>
                )}

                <Text className="text-lg font-semibold mt-4 mb-2">
                  Customization Options:
                </Text>
                {result.details.customizationOptions.length > 0 ? (
                  result.details.customizationOptions.map((option, index) => (
                    <Text key={index} className="text-base text-gray-600">
                      - {option}
                    </Text>
                  ))
                ) : (
                  <Text className="text-base text-gray-600">
                    No customization options available.
                  </Text>
                )}
              </View>
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
