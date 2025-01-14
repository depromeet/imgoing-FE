import React from 'react';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';

import { FootnoteTypo } from 'components/typography';
import { icon_close } from 'assets/svg';
import { colors, ColorScheme } from 'constant/index';

interface NotificationBarProps {
  setIsVisible: (value: boolean) => void;
  imoji: string;
  content: string;
  color?: keyof ColorScheme;
}

const NotificationBarWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  height: 46px;
  align-items: center;
  background-color: #f3f6ff;
  padding-left: 16px;
`;

const ShortcutButtonText = styled.Text`
  text-decoration-line: underline;
  color: ${({ theme }) => theme.colors.grayHeavy};
  font-size: 12px;
  font-weight: 500;
  line-height: 17px;
  padding: 0 52px 0 8px;
`;

const ShortcutButton = styled.TouchableOpacity``;

const CloseButton = styled.TouchableOpacity`
  left: 85%;
  width: 16px;
`;

const NotificationBar = (props: NotificationBarProps) => {
  const { setIsVisible, imoji, content, color = 'black' } = props;
  return (
    <NotificationBarWrapper>
      <FootnoteTypo bold color={color}>
        {imoji}
        {content}
      </FootnoteTypo>
      <ShortcutButton onPress={() => {}}>
        <ShortcutButtonText>바로 가기</ShortcutButtonText>
      </ShortcutButton>
      <CloseButton onPress={() => setIsVisible(false)}>
        <SvgXml xml={icon_close} width='100%' height='16px' fill={colors.blue} />
      </CloseButton>
    </NotificationBarWrapper>
  );
};

export default NotificationBar;
