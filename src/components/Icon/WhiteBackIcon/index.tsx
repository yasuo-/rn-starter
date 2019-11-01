import React from "react";
import { StyleSheet } from "react-native";
import { Icon } from 'react-native-elements'


export interface WhiteBackIconProps {
  handleClick?: () => void;
}

/**
 * WhiteBackIcon
 * back icon white
 * https://react-native-elements.github.io/react-native-elements/docs/icon.html
 * @param param
 *  onPress: [Function]
 */
const WhiteBackIcon: React.FC<WhiteBackIconProps> = ({
  handleClick
}) => (
  <Icon
    name='arrow-back'
    type='font-ionicon'
    color='#fff'
    onPress={handleClick} />
);


export default WhiteBackIcon
