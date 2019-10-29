import React from "react";
import { Checkbox } from 'galio-framework';


export interface DefaultCheckBoxProps {
  label: string;
  onChange: void;
}

/**
 * DefaultCheckBox
 * Checkbox default
 * https://galio.io/docs/#/components/checkbox
 * @param param
 *  label: [String]
 *  onChange: [Function]
 */
const DefaultCheckBox: React.FC<DefaultCheckBoxProps> = ({
  label,
  onChange
}) => (
  <Checkbox
    label={label}
    color="warning"
    onChange={onChange}
  />
);

export default DefaultCheckBox
