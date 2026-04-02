import CalculatorButton from "@/components/CalculatorButton";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/theme";
import { useCalculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/styles/global.styles";
import { View } from "react-native";

const CalculatorApp = () => {
  const {
    formula,
    prevNumber,
    buildNumber,
    clean,
    toggleSign,
    deleteLastNumber,
    divideOperation,
    multOperation,
    subOperation,
    addOperation,
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText
          style={globalStyles.mainResult}
          adjustsFontSizeToFit
          numberOfLines={1}
        >
          {formula}
        </ThemeText>

        {formula === prevNumber ? (
          <ThemeText
            children=" "
            style={globalStyles.subResult}
            numberOfLines={1}
            adjustsFontSizeToFit
          ></ThemeText>
        ) : (
          <ThemeText
            style={globalStyles.subResult}
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            {prevNumber}
          </ThemeText>
        )}
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label="C" color={Colors.lightGray} onPress={clean} />
        <CalculatorButton
          label="+/-"
          color={Colors.lightGray}
          onPress={() => toggleSign()}
        />
        <CalculatorButton
          label="del"
          color={Colors.lightGray}
          onPress={() => deleteLastNumber()}
        />
        <CalculatorButton
          label="/"
          color={Colors.orange}
          onPress={() => divideOperation()}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="7"
          color={Colors.lightGray}
          onPress={() => buildNumber("7")}
        />
        <CalculatorButton
          label="8"
          color={Colors.lightGray}
          onPress={() => buildNumber("8")}
        />
        <CalculatorButton
          label="9"
          color={Colors.lightGray}
          onPress={() => buildNumber("9")}
        />
        <CalculatorButton
          label="X"
          color={Colors.orange}
          onPress={() => multOperation()}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="4"
          color={Colors.lightGray}
          onPress={() => buildNumber("4")}
        />
        <CalculatorButton
          label="5"
          color={Colors.lightGray}
          onPress={() => buildNumber("5")}
        />
        <CalculatorButton
          label="6"
          color={Colors.lightGray}
          onPress={() => buildNumber("6")}
        />
        <CalculatorButton
          label="-"
          color={Colors.orange}
          onPress={() => subOperation()}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="1"
          color={Colors.lightGray}
          onPress={() => buildNumber("1")}
        />
        <CalculatorButton
          label="2"
          color={Colors.lightGray}
          onPress={() => buildNumber("2")}
        />
        <CalculatorButton
          label="3"
          color={Colors.lightGray}
          onPress={() => buildNumber("3")}
        />
        <CalculatorButton
          label="+"
          color={Colors.orange}
          onPress={() => addOperation()}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="0"
          color={Colors.lightGray}
          onPress={() => buildNumber("0")}
          doubleSize={true}
        />
        <CalculatorButton
          label="."
          color={Colors.lightGray}
          onPress={() => buildNumber(".")}
        />
        <CalculatorButton
          label="="
          color={Colors.orange}
          onPress={() => buildNumber("=")}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
