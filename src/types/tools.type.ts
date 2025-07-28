// Define the Tool interface based on Postman response
 export interface Tool {
  _id: string;
  name: string;
  description: string;
  price: number;
  commissionRate: number;
  toolId: string;
  isActive: boolean;
  imageUrl: string;
  founderId: string;
  __v: number;
}

// Define request interfaces
export interface CreateToolRequest {
  name: string;
  description: string;
  price: number;
  commissionRate: number;
  isActive?: boolean;
  imageUrl: string;
  founderId: string;
}

 export interface UpdateToolRequest {
  name?: string;
  description?: string;
  price?: number;
  commissionRate?: number;
  toolId?: string;
  isActive?: boolean;
  imageUrl?: string;
  founderId?: string;
}

// Define response interfaces
export interface ToolsResponse {
  success: boolean;
  message: string;
  data: Tool[];
  total: number;
}

export interface ToolResponse {
  success: boolean;
  message: string;
  data: Tool;
}