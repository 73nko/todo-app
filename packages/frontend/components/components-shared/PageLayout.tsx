import { Logo } from './Logo';
import { TodoWebContainer } from './TodoWebContainer';
import { TodoWebHeader } from './TodoWebHeader';

type PageLayoutProps = {
  children: React.ReactNode;
  title: string;
  subTitle?: string;
};

export const PageLayout = ({ children, title, subTitle }: PageLayoutProps) => (
  <TodoWebContainer>
    <Logo />
    <TodoWebHeader title={title} subtitle={subTitle} />
    {children}
  </TodoWebContainer>
);
