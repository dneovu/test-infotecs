import { useMutation, useQueryClient } from '@tanstack/react-query';
import { mock } from '../../../shared/api/mock';

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => mock.delete(`/users/${id}`),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};
