import { TAuthUser } from "../auth/auth.type";

export type GiveawayFormData = {
  title: string;
  priceMoney: number;
  description: string;
  rules: string[];
  deadline: string;
  newRule: string;
};


export interface IAuthor {
  _id: string;
  userId: TAuthUser;
  additionalNotes: string;
  __v: number;
}

export interface IGiveaway {
  _id: string;
  authorId: IAuthor;
  title: string;
  priceMoney: number;
  description: string;
  participantsCount: number;
  rules: string[];
  deadline: string; // ISO string date
  winnerId: string | null;
  participants: string[]; // Assuming participant IDs, update if it's array of objects
  status: "ongoing" | "completed" | "expired"; // Extend if more statuses
  createdAt: string;
  updatedAt: string;
  __v: number;
}
