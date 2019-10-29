import React from "react";
import { SocialIcon } from 'react-native-elements'


export interface SocialIconProps {
  type: string;
  onPress: void;
}

/**
 * SocialIconCircle
 * icon型ボタン
 * @param param
 *  type: [String] facebook, twitter, google
 *  onPress: [Function]
 */
const SocialIconCircle: React.FC<SocialIconProps> = ({
  type,
  onPress
}) => (
  <SocialIcon
    type={type}
    onPress={onPress}
  />
);

export default SocialIconCircle
