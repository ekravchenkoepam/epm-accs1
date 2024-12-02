import React from "react";

import { Section } from "../../Section";
import { CommonSectionProps } from "../types";

export const Deliverables: React.FC<CommonSectionProps> = ({ sectionType }) => {
  return (
    <Section sectionType={sectionType}>
      <div></div>
    </Section>
  )
}

