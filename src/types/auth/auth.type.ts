
export enum UserRole {
  INFLUENCER = "influencer",
  FOUNDER = "founder",
  INVESTOR = "investor",
  USER = "user",
  ADMIN = "admin",
}

export interface TAuthUser {
  _id: string; 
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  isActive: boolean;
  createdAt: string; 
  updatedAt: string;
  additionalNotes?: string;
};

export interface DecodedUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  isActive: boolean;
}

