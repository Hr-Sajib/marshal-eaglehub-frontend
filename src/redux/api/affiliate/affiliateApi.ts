
import { baseApi } from "../baseApi";
export interface Tool {
  _id: string;
  name: string;
  description: string;
  price: number;
  toolId: string;
  isActive: boolean;
}

export interface Affiliate {
  _id: string;
  influencerId: string;
  toolId: string;
  affiliateUrl: string;
  clicks: number;
  conversions: number;
  commissionRate: number;
  earning: number;
  sourceClicks: Record<string, number>;
  createdAt: string;
  updatedAt: string;
  __v: number;
  tool: Tool;
}

export interface AffiliateTotals {
  totalClicks: number;
  totalConversions: number;
  totalEarnings: number;
}

export interface AffiliateResponse {
  success: boolean;
  message: string;
  data: {
    affiliates: Affiliate[];
    totals: AffiliateTotals;
  };
}
 




export const affiliateApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
 
    getAffiliateDeatilsData: builder.query({
      query: (id) => `/affiliates/influencer/${id}`,
      
    }),
  }),
});


export const { useGetAffiliateDeatilsDataQuery } = affiliateApi;
