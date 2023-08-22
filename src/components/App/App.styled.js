import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export const LinkScroll = styled(Link)`
  margin-left: auto;
  margin-right: auto;
`;
