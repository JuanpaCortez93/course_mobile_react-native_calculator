import ThemeText from "@/components/ThemeText";
import { globalStyles } from "@/styles/global.styles";
import { View } from "react-native";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <ThemeText
        style={globalStyles.mainResult}
        children="50"
        adjustsFontSizeToFit
        numberOfLines={1}
      />
      <ThemeText
        style={globalStyles.subResult}
        children="2500"
        numberOfLines={1}
        adjustsFontSizeToFit
      />
    </View>
  );
};

export default CalculatorApp;
