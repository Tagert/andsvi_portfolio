import React from "react";

export type BentoGridType = {
  className?: string;
  children?: React.ReactNode;
};

export type BentoGridItemType = {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
};
