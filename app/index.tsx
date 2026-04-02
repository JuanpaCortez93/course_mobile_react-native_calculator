import CalculatorButton from "@/components/CalculatorButton";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/theme";
import { globalStyles } from "@/styles/global.styles";
import { View } from "react-native";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
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

      <View style={globalStyles.row}>
        <CalculatorButton
          label="C"
          color={Colors.lightGray}
          onPress={() => console.log("C")}
        />
        <CalculatorButton
          label="+/-"
          color={Colors.lightGray}
          onPress={() => console.log("+/-")}
        />
        <CalculatorButton
          label="del"
          color={Colors.lightGray}
          onPress={() => console.log("del")}
        />
        <CalculatorButton
          label="/"
          color={Colors.orange}
          onPress={() => console.log("/")}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="7"
          color={Colors.lightGray}
          onPress={() => console.log("7")}
        />
        <CalculatorButton
          label="8"
          color={Colors.lightGray}
          onPress={() => console.log("8")}
        />
        <CalculatorButton
          label="9"
          color={Colors.lightGray}
          onPress={() => console.log("9")}
        />
        <CalculatorButton
          label="X"
          color={Colors.orange}
          onPress={() => console.log("X")}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="4"
          color={Colors.lightGray}
          onPress={() => console.log("7")}
        />
        <CalculatorButton
          label="5"
          color={Colors.lightGray}
          onPress={() => console.log("8")}
        />
        <CalculatorButton
          label="6"
          color={Colors.lightGray}
          onPress={() => console.log("9")}
        />
        <CalculatorButton
          label="-"
          color={Colors.orange}
          onPress={() => console.log("X")}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="1"
          color={Colors.lightGray}
          onPress={() => console.log("7")}
        />
        <CalculatorButton
          label="2"
          color={Colors.lightGray}
          onPress={() => console.log("8")}
        />
        <CalculatorButton
          label="3"
          color={Colors.lightGray}
          onPress={() => console.log("9")}
        />
        <CalculatorButton
          label="+"
          color={Colors.orange}
          onPress={() => console.log("X")}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="0"
          color={Colors.lightGray}
          onPress={() => console.log("7")}
          doubleSize={true}
        />
        <CalculatorButton
          label="."
          color={Colors.lightGray}
          onPress={() => console.log("8")}
        />
        <CalculatorButton
          label="="
          color={Colors.orange}
          onPress={() => console.log("X")}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
