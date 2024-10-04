import { Retweet as TRetweet } from "../api/retweet/Retweet";

export const RETWEET_TITLE_FIELD = "id";

export const RetweetTitle = (record: TRetweet): string => {
  return record.id?.toString() || String(record.id);
};
