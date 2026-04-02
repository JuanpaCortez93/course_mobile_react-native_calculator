import { Colors } from "@/constants/theme";
import { globalStyles } from "@/styles/global.styles";
import { Pressable, Text } from "react-native";

interface IProps {
  label: string;
  color: string;
  blackTxt?: boolean;
  onPress?: () => void;
  doubleSize?: boolean;
}

const CalculatorButton = ({
  label,
  color = Colors.darkGray,
  blackTxt = false,
  doubleSize = false,
  onPress,
}: IProps) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 180 : 80,
      })}
      onPress={onPress}
    >
      <Text
        style={[
          { ...globalStyles.buttonTxt, color: blackTxt ? "black" : "white" },
          { color: blackTxt ? "black" : "white" },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default CalculatorButton;
