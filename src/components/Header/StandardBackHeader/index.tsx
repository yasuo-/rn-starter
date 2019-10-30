import React from "react";
import { NavBar } from 'galio-framework';


export interface StandardBackHeaderProps {
  title?: string;
}

/**
 * StandardBackHeader
 * Header Standard
 * @param param
 *  title: [String]
 */
const StandardBackHeader: React.FC<StandardBackHeaderProps> = ({
  title,
}) => (
  <NavBar title={title} transparent back />
);

export default StandardBackHeader
