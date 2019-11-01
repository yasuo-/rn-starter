import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export interface CheckWithTagProps {
  label: string;
  onPress?: () => void;
}

/**
 * CheckWithTag
 * check with tag
 * todo: checked時のチェック画像
 * @param param
 *  label: [String]
 *  onPress: [Function]
 */
const CheckWithTag: React.FC<CheckWithTagProps> = ({
  label,
  onPress
}) => (
  <TouchableOpacity style={styles.touchable} onPress={onPress}>
    <View style={styles.tag}>
      <Text style={styles.text}>{label}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  touchable: {
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 8,
  },
  tag: {
    flexDirection: 'row',
    borderRadius: 24,
    borderColor: '#ccc',
    borderWidth: 2,
    backgroundColor: '#fff',
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
  text: {
    textAlign: 'center',
    color: '#ccc',
    fontSize: 16
  },
});

export default CheckWithTag
