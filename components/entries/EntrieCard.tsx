import React, { FC } from "react";
import { Entry } from "../../interfaces";

export const EntrieCard: FC<Entry> = ({
  _id,
  createdAt,
  description,
  status,
}) => {
  return <div>EntrieCard</div>;
};
