import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  content: '';
  position: relative;
  width: 100%;
  height: 50px;
  margin: 0 0 60px;
  background-color: ${props => props.color};

  &:hover .behind {
    display: block;
  }
`;

const Fill = styled.div`
  content: '';
  height: 50px;
  background-color: ${props => props.color}
  width: ${props => props.percentage}%
`;

const Now = styled.div`
  content: '';
  position: absolute;
  top: 0;
  height: 60px;
  width: 2px;
  margin-left: ${props => props.progress}%
  background-color: black;
`;

const Behind = styled.div`
  display: none;
  position: absolute;
  color: white;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  margin-top: 16px;
`;

const Text = styled.div`
  color: white;
  display: inline;
  ${props =>
    props.percentage
      ? `margin-left: calc(${props.percentage}% - ${props.offset ||
          0}px); position: absolute;`
      : `float: ${props.align}; margin-top: -20px;`}
`;

export default ({ goal, progress, onGoalEdit }) => (
  <>
    <Text align="left">{goal.name}</Text>
    <Text align="right">
      {goal.target} {goal.unit} goal
    </Text>
    <Bar color={goal.colors.background} onClick={() => onGoalEdit(goal)}>
      <Fill
        color={goal.colors.fill}
        percentage={Math.min((goal.current / goal.target) * 100, 100)}
      />

      <Behind className="behind">
        {goal.current / goal.target < 1
          ? `YOU'RE ${goal.target - goal.current} ${goal.unit} BEHIND THE SCHEDULE`
          : `Done. ${goal.current} ${goal.unit}`}
      </Behind>

      <Now progress={progress} />
      <Text percentage={progress} offset={48}>
        TODAY
      </Text>
      {goal.current / goal.target < 1 && (
        <Text percentage={(goal.current / goal.target) * 100} offset={54}>
          {goal.current} {goal.unit}
        </Text>
      )}
    </Bar>
  </>
);
