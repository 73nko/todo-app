import React from 'react';
import styled from '@emotion/styled';

interface TodoWebHeaderProps {
  title: string;
  subtitle?: string;
}

const Title = styled.h2`
  margin-bottom: 0.5rem;
  margin-block-end: 0;
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--main-text-color);
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin-block-start: 0.5rem;
  margin-block-end: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--secondary-text-color);
`;

const TodoWebHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const TodoWebHeader = ({ title, subtitle }: TodoWebHeaderProps) => {
  return (
    <TodoWebHeaderContainer>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </TodoWebHeaderContainer>
  );
};
