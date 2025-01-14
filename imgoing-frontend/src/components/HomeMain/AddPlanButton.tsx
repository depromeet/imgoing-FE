import React from 'react';
import { SvgXml } from 'react-native-svg';
import styled, { css } from 'styled-components/native';

import { icon_plus } from 'assets/svg';
import { colors } from 'constant/index';
import { SubheadlineTypo } from 'components/typography';

interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  full?: boolean;
}

const StyledButton = styled.TouchableOpacity<Pick<ButtonProps, 'full'>>`
  position: absolute;
  top: 90%;
  flex-direction: row;
  text-align: center;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.blue};
  ${(props) => {
    if (!props.full)
      return css`
        width: 56px;
        height: 56px;
        padding: 16px;
        left: 80%;
      `;
    return css`
      width: 145px;
      height: 50px;
      padding: 15px 20px 15px 20px;
      left: 60%;
    `;
  }}
`;
const Gap = styled.View`
  width: 4px;
`;

const AddPlanButton = (props: ButtonProps) => {
  return (
    <StyledButton {...props}>
      {props.full ? (
        <SvgXml xml={icon_plus} width='20px' fill={colors.white} />
      ) : (
        <SvgXml xml={icon_plus} width='24px' fill={colors.white} />
      )}
      {props.full && (
        <>
          <Gap />
          <SubheadlineTypo bold color={'white'}>
            {props.children}
          </SubheadlineTypo>
        </>
      )}
    </StyledButton>
  );
};

export default AddPlanButton;
