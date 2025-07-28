 export interface IParticipant {
  _id: string;
  giveawayId: string;
  userId: string;
  socialUsername: string;
  videoLink: string;
  proofs: {
    ruleTitle: string;
    imageUrl: string;
    verified: boolean;
    _id: string;
  }[];
  isWinner: boolean; // Type for isWinner is boolean
  submittedAt: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}