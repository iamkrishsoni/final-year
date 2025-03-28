import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const QuoteCard = () => {
  const quotes = [
    "Taking just 10 minutes of mindful breathing can reduce anxiety by nearly 30%!",
    "People who journal regularly are 20% more likely to achieve their personal goals.",
    "Social media detoxes can improve your mood by up to 20% in just one week!",
    "80% of your serotonin (the 'feel-good' hormone) is produced in your gut!",
    "Regular positive affirmations can rewire your brain in as little as 3 weeks!",
    "Petting a dog or cat for just 10 minutes can lower your stress levels by 50%!",
    "Exercising for 30 minutes a day can boost your creativity by up to 60%!",
    "Smiling (even when forced!) can actually trick your brain into feeling happier.",
    "Listening to your favorite music triggers the same pleasure centers in your brain as eating chocolate!",
    "Laughter boosts your immune system and can burn up to 40 calories in 10 minutes!",
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <View className="bg-[#FFECC6] rounded-2xl px-5 pb-4 mt-4 shadow-md w-full">
      {/* Left Quotation Mark */}
      <View className="flex items-start w-full">
        <Icon
          name="format-quote"
          size={60}
          color="#FFBE16"
          style={{ transform: [{ rotate: "180deg" }] }}
        />
      </View>

      {/* Quote Text */}
      <Text className="text-[#4F3422] text-center text-md px-20 leading-6 my-[-2rem]">
        "{quotes[currentQuoteIndex]}"
      </Text>

      {/* Right Quotation Mark */}
      <View className="flex items-end w-full">
        <Icon name="format-quote" size={60} color="#FFBE16" />
      </View>

      {/* Pagination Dots */}
      <View className="flex-row justify-center -mt-2 gap-1">
        {quotes.map((_, index) => (
          <View
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentQuoteIndex ? "bg-gray-600" : "bg-gray-300"
            }`}
          />
        ))}
      </View>
    </View>
  );
};

export default QuoteCard;
