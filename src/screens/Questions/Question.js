import "nativewind";
import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import Button from "../../components/Button/IconButton";
import OptionButton from "../../components/Button/OptionButton";
import Header from "../../components/Header/Question_Header";
import right_arrow from "../../../assets/icon/right_arrow.png";
import questionsData from "./question.json";
import coolnessfactor from "../../../assets/bg/coolnessfactor.png";

const CFAssignment = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const currentCategory = questionsData[currentCategoryIndex];
  const currentQuestion = currentCategory.questions[currentQuestionIndex];

  const totalCategories = questionsData.length;
  const totalQuestionsInCategory = currentCategory.questions.length;

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (selectedOption) {
      // Save the selected answer
      setAnswers((prevAnswers) => [
        ...prevAnswers,
        {
          category: currentCategory.category,
          question: currentQuestion.question,
          answer: selectedOption,
        },
      ]);

      // Move to the next question
      if (currentQuestionIndex < totalQuestionsInCategory - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(""); // Reset selection
      } else if (currentCategoryIndex < totalCategories - 1) {
        // Move to the next category
        setCurrentCategoryIndex(currentCategoryIndex + 1);
        setCurrentQuestionIndex(0); // Reset question index
        setSelectedOption(""); // Reset selection
      } else {
        // All questions are answered
        // Filter only the 'floors' answer
        const floorsAnswer = answers.find((answer) =>
          answer.question.toLowerCase().includes("floors")
        );
        navigation.navigate("Result", { answers: floorsAnswer });
        console.log(floorsAnswer);
      }
    }
  };

  return (
    <ImageBackground
      source={coolnessfactor}
      className="bg-[#F7F4F2] h-full w-full px-6 flex pb-10"
    >
      <Header
        title={currentCategory.category}
        questions_total={totalCategories.toString()}
        current_question={(currentCategoryIndex + 1).toString()}
        custom_css="bg-transparent"
        navigation={navigation}
      />
      <View className="flex items-center w-full h-full pt-20">
        <View className="flex w-full items-center gap-y-2">
          <Text className="text-4xl font-semibold text-center text-[#4F3422]">
            {currentQuestion.question}
          </Text>
        </View>
        <View className="gap-y-4 w-full py-12">
          {currentQuestion.options.map((option, index) => (
            <OptionButton
              key={index}
              label={option}
              color="#FFBE16"
              border="#FFBE16"
              isSelected={selectedOption === option}
              onPress={() => handleOptionSelect(option)}
            />
          ))}
        </View>
        <Button text="Continue" icon={right_arrow} onPress={handleContinue} />
      </View>
    </ImageBackground>
  );
};

export default CFAssignment;
