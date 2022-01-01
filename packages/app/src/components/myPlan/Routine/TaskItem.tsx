import { colors } from 'design-token';
import { icon_delete } from 'icons';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Text } from 'ui';

interface TaskItemProps {
  title: string;
  duration?: number;
  edit?: boolean;
}

const TaskItem = ({ title, duration, edit = false }: TaskItemProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={edit ? styles.edit : styles.title}>
        <Text fontType='BOLD_14'>{title}</Text>
      </View>
      <Text fontType='REGULAR_12' color={colors.grayDark}>
        {duration}분
      </Text>
      {edit && (
        <Pressable onPress={() => {}} style={{ alignItems: 'flex-end', flex: 1 }}>
          <SvgXml xml={icon_delete} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.grayLight,
    borderRadius: 8,
    paddingHorizontal: 18,
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 15,
  },
  title: {
    flex: 4,
  },
  edit: {
    paddingRight: 6,
  },
});

export default TaskItem;
