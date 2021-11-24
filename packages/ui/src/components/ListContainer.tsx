import React from 'react';
import { GestureResponderEvent, Pressable, StyleSheet, View } from 'react-native';

import { colors } from 'design-token';
import { Text } from 'ui';

interface ListContainerProps {
  text: string;
  subText?: string;
  onClick?: (e: GestureResponderEvent) => void;
  children?: JSX.Element;
}

export const ListContainer = (props: ListContainerProps) => {
  const { text, subText, onClick, children } = props;
  const wrapperPadding = subText ? 14 : 10;
  return (
    <Pressable style={[styles.wrapper, { paddingVertical: wrapperPadding }]} onPress={onClick}>
      <View style={styles.mainContainer}>
        <Text style={styles.text} fontType='BOLD_16' color={colors.black}>
          {text}
        </Text>
        {children && <View style={styles.children}>{children}</View>}
      </View>
      {subText && (
        <View style={styles.subtextContainer}>
          <Text fontType='REGULAR_12' color={colors.grayDark}>
            {subText}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    width: '95%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  mainContainer: {
    flexDirection: 'row',
  },
  children: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtextContainer: {
    height: 14,
    justifyContent: 'center',
  },
  text: {
    flex: 5,
    width: 244,
    marginVertical: 10,
  },
});