import React from "react";
import { StyleSheet } from "react-native";
import { Icon } from 'react-native-elements'


export interface DefaultSearchIconProps {
  handleClick?: () => void;
}

/**
 * DefaultSearchIcon
 * search icon default
 * https://react-native-elements.github.io/react-native-elements/docs/icon.html
 * @param param
 *  onPress: [Function]
 */
const DefaultSearchIcon: React.FC<DefaultSearchIconProps> = ({
  handleClick
}) => (
  <Icon
    name='search'
    type='font-ionicon'
    color='#1DAF9E'
    onPress={handleClick} />
);


export default DefaultSearchIcon
