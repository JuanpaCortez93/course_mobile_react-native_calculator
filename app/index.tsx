import { globalStyles } from "@/styles/global.styles";
import { Text, View } from "react-native";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <Text style={globalStyles.mainResult}>50x50</Text>
      <Text style={globalStyles.subResult}>2000</Text>
    </View>
  );
};

export default CalculatorApp;
