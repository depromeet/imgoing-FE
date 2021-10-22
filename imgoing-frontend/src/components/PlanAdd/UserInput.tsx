import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

import { AddingPlanStepsType } from 'types/index';
import Input from 'components/common/Input';
import RectangleButton from 'components/common/RectangleButton';
import { icon_openRight, icon_plus } from 'assets/svg';
import { useDispatch, useSelector } from 'react-redux';
import { resetStep } from 'modules/slices/stepOfAddingPlan';

const Wrapper = styled.View`
  flex: 1;
  padding: 16px;
`;

const EditInput = styled(Input)`
  margin-bottom: 40px;
`;

const Step1 = () => {
  return <EditInput title='스케줄 이름을 입력해 주세요' placeholder='스케줄 이름 입력하기' />;
};

const Step2 = () => {
  const [departure, setDeparture] = useState<string>();
  return (
    <RectangleButton rightIcon={icon_openRight}>{departure ?? '출발지 설정하기'}</RectangleButton>
  );
};

const Step3 = () => {
  const [destination, setDestination] = useState<string>();
  return (
    <RectangleButton rightIcon={icon_openRight}>{destination ?? '목적지 설정하기'}</RectangleButton>
  );
};

const Step4 = () => {
  return <EditInput title='도착 시간을 입력해 주세요' placeholder='날짜 / 시간 입력하기' />;
};

const Step5 = () => {
  return <EditInput title='외출 시 필요한 물품이 있나요' />;
};

const Step6 = () => {
  return <EditInput title='일정에 대한 상세 내용을 알려주세요' />;
};

const Step7 = () => {
  return <RectangleButton leftIcon={icon_plus}>등록해 주세요</RectangleButton>;
};

const UserInput = () => {
  const stepOfAddingPlan = useSelector((state) => state.stepOfAddingPlan);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!stepOfAddingPlan.step) dispatch(resetStep());
  }, [stepOfAddingPlan.step]);

  const currentStep = (step: keyof AddingPlanStepsType | null) => {
    switch (step) {
      case 'setTitle':
        return <Step1 />;
      case 'setDeparture':
        return <Step2 />;
      case 'setArrival':
        return <Step3 />;
      case 'setArrivalTime':
        return <Step4 />;
      case 'setItem':
        return <Step5 />;
      case 'setDetails':
        return <Step6 />;
      case 'setTask':
        return <Step7 />;
      default:
        return <Text>done</Text>;
    }
  };

  return <Wrapper>{currentStep(stepOfAddingPlan.step)}</Wrapper>;
};

export default UserInput;
