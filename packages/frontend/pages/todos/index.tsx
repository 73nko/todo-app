import { PageLayout } from '../../components/components-shared';
import Todos from '../../components/Todos';

import { useAuth } from '../../hooks/useAuth';

const PAGE_TITLE = 'Todo List';

export function Index() {
  useAuth();

  return (
    <PageLayout title={PAGE_TITLE}>
      <Todos />
    </PageLayout>
  );
}

export default Index;
