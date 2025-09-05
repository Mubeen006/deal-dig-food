const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  count?: number;
  message?: string;
}

class ApiService {
  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`API request failed for ${endpoint}:`, error);
      throw error;
    }
  }

  // Restaurant endpoints
  async getRestaurants() {
    return this.request<ApiResponse<any[]>>('/restaurants');
  }

  async getRestaurantById(id: string) {
    return this.request<ApiResponse<any>>(`/restaurants/${id}`);
  }

  async getRestaurantsByCategory(category: string) {
    return this.request<ApiResponse<any[]>>(`/restaurants/category/${category}`);
  }

  async searchRestaurants(query: string) {
    return this.request<ApiResponse<any[]>>(`/restaurants/search?q=${encodeURIComponent(query)}`);
  }

  // Cuisine endpoints
  async getCuisines() {
    return this.request<ApiResponse<any[]>>('/cuisines');
  }

  // Daily deals endpoints
  async getDailyDeals() {
    return this.request<ApiResponse<any[]>>('/daily-deals');
  }

  // Health check
  async healthCheck() {
    return this.request<any>('/health');
  }
}

export const apiService = new ApiService();
export default apiService;