export interface Tool {
  _id: string;
  name: string;
  description: string;
  price: number;
  toolId: string;
  isActive: boolean;
}

export interface IAffiliate {
  _id: string;
  influencerId: string;
  toolId: string;
  affiliateUrl: string;
  clicks: number;
  conversions: number;
  commissionRate: number;
  earning: number;
  sourceClicks: Record<string, number>; // e.g., { youtube: 8 }
  createdAt: string;
  updatedAt: string;
  __v: number;
  tool: Tool;
}

export interface ITotals {
  totalClicks: number;
  totalConversions: number;
  totalEarnings: number;
}

export interface InfluencerInfoData {
  affiliates: IAffiliate[];
  totals: ITotals;
}