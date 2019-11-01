import React from "react";
import { StyleSheet } from "react-native";
import { Icon } from 'react-native-elements'


export interface DefaultCloseIconProps {
  handleClick?: () => void;
}

/**
 * DefaultCloseIcon
 * search icon default
 * https://react-native-elements.github.io/react-native-elements/docs/icon.html
 * @param param
 *  onPress: [Function]
 */
const DefaultCloseIcon: React.FC<DefaultCloseIconProps> = ({
  handleClick
}) => (
  <Icon
    name='close'
    type='font-ionicon'
    color='#1DAF9E'
    onPress={handleClick} />
);


export default DefaultCloseIcon
