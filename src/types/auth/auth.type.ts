
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


export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  isActive: boolean;
  additionalNotes?: string;
  
  // Investor specific
  investorData?: {
    projectTypes: string;
    investmentRange: string;
    dealCriteria: string;
    investmentStage: string;
    sectors: string;
    avgInvestmentSize: string;
    locationPreferences: string;
    portfolioCompanies?: string;
  };
  
  // Founder specific
  founderData?: {
    projectName: string;
    projectDescription: string;
    hasLiveProduct: boolean;
    websiteOrDemoLink: string;
    investmentType: string;
    fundingAmount: string;
    stage: string;
    teamSize: string;
    revenueModel: string;
    traction?: string;
    competitors?: string;
  };
  
  // Influencer specific
  influencerData?: {
    socialMediaProfiles: string;
    followerCount: string;
    areasOfInfluence: string;
    primaryPlatform: string;
  };
};


