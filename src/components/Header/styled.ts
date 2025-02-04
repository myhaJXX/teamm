import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > nav {
    padding: ${(props) => props.theme.paddings.paddingLittle}
      ${(props) => props.theme.paddings.paddingBig};
    display: flex;
    gap: ${(props) => props.theme.gaps.gapBig};
    align-items: center;
    border: 3px solid ${(props) => props.theme.colorAdd1};
    border-radius: ${(props) => props.theme.borderRadiuses.borderRadiusMedium};

    > a {
      &:hover {
        color: ${(props) => props.theme.colorAdd3};
      }
    }
  }
`;
