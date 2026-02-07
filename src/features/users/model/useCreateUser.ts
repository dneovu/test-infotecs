import { useMutation, useQueryClient } from '@tanstack/react-query';
import { mock } from '../../../shared/api/mock';

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: { name: string; avatar: string }) =>
      mock.post('/users', payload),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};
