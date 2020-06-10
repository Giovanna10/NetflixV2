import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface TabComponentProps {
  color: string;
}

interface TabProps {
  color: string;
  tabText: string;
  cta: () => void;
}

const TabComponent = styled(motion.text)<TabComponentProps>`
  font-size: 13px;
  font-weight: bold;
  color: ${(props) => props.color};
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
`;

const Tab: React.FC<TabProps> = ({
  color,
  tabText,
  cta,
}) => {
  return (
    <TabComponent
      color={color}
      whileHover={{
        scale: 1.2,
        transition: { duration: 1 },
      }}
      whileTap={{ scale: 0.9 }}
      onClick={() => cta()}
    >
      {tabText}
    </TabComponent>
  );
};

export default Tab;
