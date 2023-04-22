import SignUp from '../../components/Sign-up';
import { PageLayout } from '../../components/components-shared';

const PAGE_TITLE = 'Welcome!';
const PAGE_SUBTITLE = 'Sign up to start using Simpledo today.';

export function Index() {
  return (
    <PageLayout title={PAGE_TITLE} subTitle={PAGE_SUBTITLE}>
      <SignUp />
    </PageLayout>
  );
}

export default Index;
