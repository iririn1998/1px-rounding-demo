import type { FC } from "react";
import { ScrollContainer } from "./ScrollContainer";
import { ScrollContents } from "./ScrollContents";

export const Demo1: FC = () => {
  return (
    <ScrollContainer>
      <ScrollContents />
    </ScrollContainer>
  );
};
