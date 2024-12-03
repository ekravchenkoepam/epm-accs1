import React from "react";

import { Section } from "../../Section";
import { CommonSectionProps } from "../types";

export const Rates: React.FC<CommonSectionProps> = ({ sectionType, isOptional }) => {
  return (
    <Section sectionType={sectionType} isOptional={isOptional}>
      <div></div>
    </Section>
  )
}
