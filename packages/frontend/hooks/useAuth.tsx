import { USER_GET } from '../graphql/User';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
const useAuth = () => {
  const router = useRouter();

  const { loading, data, error } = useQuery(USER_GET.gql);
};
