import { StyleProp, Text, TextProps, TextStyle } from "react-native";

interface IProps extends TextProps {
  style: StyleProp<TextStyle>;
  children: string;
}

const ThemeText = ({ style, children, ...rest }: IProps) => {
  return (
    <Text style={style} {...rest}>
      {children}
    </Text>
  );
};

export default ThemeText;
