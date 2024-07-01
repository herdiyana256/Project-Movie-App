// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import BottomTabNavigator from "./src/navigations/BottomTabNavigation";

// export default function App(): JSX.Element {
//   return (
//     <NavigationContainer>
//       <BottomTabNavigator />
//     </NavigationContainer>
//   );
// }

// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import BottomTabNavigator from "./src/navigations/BottomTabNavigation";

// const App = (): JSX.Element => {
//   return (
//     <NavigationContainer>
//       <BottomTabNavigator />
//     </NavigationContainer>
//   );
// };

// export default App;



//CHANGED
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./src/navigations/BottomTabNavigation";
import SearchScreen from "./src/screens/SearchScreen";
import GenreScreen from "./src/screens/GenreScreen";
import MovieScreen from "./src/screens/MovieScreen";

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <BottomTabNavigator.Navigator>
        <BottomTabNavigator.Screen name="Home" component={SearchScreen} />
        <BottomTabNavigator.Screen name="Genre" component={GenreScreen} />
        <BottomTabNavigator.Screen name="Movie" component={MovieScreen} />
      </BottomTabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;