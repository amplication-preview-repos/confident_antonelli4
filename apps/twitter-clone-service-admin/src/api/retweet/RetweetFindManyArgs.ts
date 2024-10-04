import { RetweetWhereInput } from "./RetweetWhereInput";
import { RetweetOrderByInput } from "./RetweetOrderByInput";

export type RetweetFindManyArgs = {
  where?: RetweetWhereInput;
  orderBy?: Array<RetweetOrderByInput>;
  skip?: number;
  take?: number;
};
