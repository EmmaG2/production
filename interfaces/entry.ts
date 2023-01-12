export interface Entry {
  _id: string;
  description: string;
  createdAt: string;
  status: EntriesState;
}

export type EntriesState = "pending" | "finished" | "in-progress";
