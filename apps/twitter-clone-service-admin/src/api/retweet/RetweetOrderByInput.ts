import { SortOrder } from "../../util/SortOrder";

export type RetweetOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
