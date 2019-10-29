import React from "react";
import { View, Text, StyleSheet } from "react-native";


export interface DefaultCheckTagProps {
  label: string;
  onChange: void;
}

/**
 * DefaultCheckTag
 * tag default
 * https://galio.io/docs/#/components/checkbox
 * @param param
 *  label: [String]
 *  onChange: [Function]
 */
const DefaultCheckTag: React.FC<DefaultCheckTagProps> = ({
  label
}) => (
  <View style={styles.tag}>
    <Text style={styles.text}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  tag: {
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 8,
    flexDirection: 'row',
    borderRadius: 4,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#fff',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
  text: {
    textAlign: 'center',
    color: '#ccc',
    fontSize: 12
  },
});

export default DefaultCheckTag
