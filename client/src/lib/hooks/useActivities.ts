import { useQuery } from '@tanstack/react-query';
import agent from '../api/agent';

// React Query will handle the data fetching and caching and state management
export const useActivities = () => {
  const { data: activities, isPending } = useQuery({
    queryKey: ['activities'],
    queryFn: async () => {
      const response = await agent.get<Activity[]>('/activities');
      return response.data;
    },
  });

  return { activities, isPending };
};
