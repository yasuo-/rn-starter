import React from "react";
import { NavBar } from 'galio-framework';


export interface StandardHeaderProps {
  title: string;
}

/**
 * StandardHeader
 * Header Standard
 * @param param
 *  title: [String]
 */
const StandardHeader: React.FC<StandardHeaderProps> = ({
  title,
}) => (
  <NavBar title={title} transparent />
);

export default StandardHeader
