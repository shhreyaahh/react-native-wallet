//when we add a bg color and make header white, still we can see color on the top a small line, so to remove that we are doing all this

import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { COLORS } from "../constants/colors";

//nsets refer to the space between the edge of the screen and your content. Think of it like padding that keeps your app’s buttons or text from getting too close to the edges.
//On iPhones with notches or rounded corners, insets help avoid overlap.
//Example: SafeAreaInsets in React Native or SwiftUI make sure your content doesn’t get hidden behind the notch or home bar


const SafeScreen = ({children}) => {
    const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top, flex: 1, backgroundColor: COLORS.background }}>
        {children}
      
    </View>
  );
};

export default SafeScreen;
