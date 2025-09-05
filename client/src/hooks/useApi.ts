import { useQuery } from '@tanstack/react-query';
import { apiService } from '@/services/api';

export function useRestaurants() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['restaurants'],
    queryFn: async () => {
      const response = await apiService.getRestaurants();
      return response.data || [];
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    refetchOnMount: true, // Allow initial fetch
  });

  return { 
    restaurants: data || [], 
    loading: isLoading, 
    error: error?.message || null 
  };
}

export function useCuisines() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['cuisines'],
    queryFn: async () => {
      const response = await apiService.getCuisines();
      return response.data || [];
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    refetchOnMount: true, // Allow initial fetch
  });

  return { 
    cuisines: data || [], 
    loading: isLoading, 
    error: error?.message || null 
  };
}

export function useDailyDeals() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['dailyDeals'],
    queryFn: async () => {
      const response = await apiService.getDailyDeals();
      return response.data || [];
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    refetchOnMount: true, // Allow initial fetch
  });

  return { 
    dailyDeals: data || [], 
    loading: isLoading, 
    error: error?.message || null 
  };
}