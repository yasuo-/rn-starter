import React from "react";
import { SocialIcon } from 'react-native-elements'


export interface SocialIconBProps {
  title?: string;
  type: string;
  onPress: void;
}

/**
 * SocialIcon
 * ボタン型 social icon
 * @param param
 *  title: [String]
 *  type: [String] facebook, twitter, google
 *  onPress: [Function]
 */
const SocialIconButton: React.FC<SocialIconBProps> = ({
  title,
  type,
  onPress
}) => (
  <SocialIcon
    button
    title={title}
    type={type}
    onPress={onPress}
  />
);

export default SocialIconButton
