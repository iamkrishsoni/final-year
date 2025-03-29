import "nativewind";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Modal,
  ActivityIndicator,
  TouchableOpacity,
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
      // Construct the prompt based on user answers
      const prompt = constructPrompt(userAnswers);
      console.log("Generated Prompt:", prompt);

      const response = await generateImage(prompt);
      console.log("API Response:", response);

      if (response.success) {
        setImageUri(response.imageUrl);
      } else {
        setError(response.error || "Failed to generate image.");
      }
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
    }
  };
  const getGeneralImage = async () => {
    setLoading(true);
    try {
      const generalPrompt = constructGeneralPrompt(userAnswers);
      console.log("General Prompt:", generalPrompt);

      const response = await generateImage(generalPrompt);
      console.log("General API Response:", response);

      if (response.success) {
        setImageUri(response.imageUrl);
      } else {
        console.error(response.error || "Failed to generate image.");
      }
    } catch (error) {
      console.error("Error generating general image:", error);
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
  const constructGeneralPrompt = (answers) => {
    const plotSize =
      answers.find((a) => a.question === "What is the size of the plot?")
        ?.answer || "Medium";
    const homeType =
      answers.find(
        (a) => a.question === "Which architectural style do you prefer?"
      )?.answer || "Modern";

    return `A beautiful ${homeType} house designed for a ${plotSize} plot. Top-down architectural view.`;
  };
  const constructPrompt = (answers) => {
    const plotSize =
      answers.find((a) => a.question === "What is the size of the plot?")
        ?.answer || "Medium";
    const homeType =
      answers.find(
        (a) => a.question === "Which architectural style do you prefer?"
      )?.answer || "Modern";
    const floors =
      answers.find((a) => a.question === "How many floors do you want?")
        ?.answer || "Two Stories";
    const rooms =
      answers.find((a) => a.question === "What key rooms are required?")
        ?.answer || "Living Room, Kitchen";
    const outdoorSpace =
      answers.find((a) => a.question === "Do you need outdoor spaces?")
        ?.answer || "No";
    const parking =
      answers.find((a) => a.question === "Do you require parking space?")
        ?.answer || "No";
    const luxuryFeatures =
      answers.find(
        (a) => a.question === "What luxury features would you like to include?"
      )?.answer || "None";
    const materials =
      answers.find(
        (a) =>
          a.question === "Do you have preferences for construction materials?"
      )?.answer || "Standard";
    const sustainability =
      answers.find(
        (a) =>
          a.question === "Should the design include sustainability features?"
      )?.answer || "No";
    const lighting =
      answers.find((a) => a.question === "What kind of lighting do you prefer?")
        ?.answer || "Standard";
    const ventilation =
      answers.find(
        (a) => a.question === "What kind of ventilation do you prefer?"
      )?.answer || "Standard";

    let length = 80,
      width = 60;
    if (plotSize === "Large (5000-10,000 sq ft)") {
      length = 100;
      width = 80;
    }

    return `A ${floors} ${homeType} house design with a width of ${width}ft and length of ${length}ft. 
    It includes a ${rooms}, an outdoor ${outdoorSpace}, and ${parking} parking. 
    Features: ${luxuryFeatures}, built with ${materials}, incorporating ${sustainability} features. 
    Lighting: ${lighting}, Ventilation: ${ventilation}. 
    Top view architectural layout with realistic details.`;
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
              <TouchableOpacity
                className="text-center bg-blue-500 mt-12 rounded-lg p-5"
                onPress={() => getGeneralImage()}
              >
                <Text
                  style={{ color: "#fff", fontSize: 18 }}
                  className="font-bold"
                >
                  Get 1D View
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="text-center bg-blue-500 mt-12 rounded-lg p-5"
                onPress={() =>
                  navigation.navigate("HouseViewerScreen", {
                    modelKey: "home",
                  })
                }
              >
                <Text
                  style={{ color: "#fff", fontSize: 18 }}
                  className="font-bold"
                >
                  3D View
                </Text>
              </TouchableOpacity>
              {/* <Text className="text-center text-lg font-bold mt-4">
                {result.description}
              </Text> */}
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
