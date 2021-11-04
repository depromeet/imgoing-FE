import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components/native';

import { CalloutTypo } from 'components/typography';
import { removeModal, setModal } from 'modules/slices/modal';
import { useNavigation } from '@react-navigation/native';
import { togglePlanPin } from 'modules/slices/plan';
import { showToastMessage } from 'utils/toast';

interface ModalButtonProps {
  first?: boolean;
}

const ModalView = styled.Pressable`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

const ModalButton = styled.TouchableOpacity<Pick<ModalButtonProps, 'first'>>`
  width: 100%;
  height: 60px;
  background: ${(props) => props.theme.colors.white};
  justify-content: center;
  align-items: center;
  ${(props) => {
    if (props.first)
      return css`
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
      `;
  }}
`;

const MenuModal = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const identify = useSelector((state) => state.identify);
  const targetPlan = useSelector((state) =>
    state.plan.find((element) => {
      return element.id === identify?.id;
    }),
  );
  const pinStatus = targetPlan?.isPinned;
  const toastContent = pinStatus ? '고정이 해제되었습니다' : '일정이 고정되었습니다';
  const navigatePlanEdit = () => {
    dispatch(removeModal());
    navigation.navigate('PlanEdit');
  };
  return (
    <ModalView
      onPress={() => {
        dispatch(removeModal());
      }}>
      <ModalButton
        first
        onPress={() => {
          dispatch(removeModal());
          dispatch(togglePlanPin(Number(identify?.id)));
          showToastMessage(toastContent);
        }}>
        <CalloutTypo color={'black'}>고정하기</CalloutTypo>
      </ModalButton>
      <ModalButton onPress={navigatePlanEdit}>
        <CalloutTypo color={'black'}>편집하기</CalloutTypo>
      </ModalButton>
      <ModalButton
        onPress={() => {
          dispatch(removeModal());
          dispatch(setModal({ modalType: 'delete' }));
        }}>
        <CalloutTypo color={'black'}>삭제하기</CalloutTypo>
      </ModalButton>
    </ModalView>
  );
};

export default MenuModal;
