import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import Bar from './components/Bar';
import GoalEditModal from './components/GoalEditModal';

const Title = styled.h1`
  color: white;
  font-weight: 100;
  margin-bottom: 0px;
`;

const Subtitle = styled.h2`
  color: white;
  font-weight: 100;
  font-size: 14px;
  margin: 0 0 50px;
`;

const Container = styled.div`
  padding: 10px;
`;

class App extends Component {
  state = {
    yearProgress: this.yearProgress(),
    goals: [],
    isModalOpen: false,
    currentlyEditingGoal: null,
  };

  componentDidMount() {
    this.setState({
      goals: JSON.parse(localStorage.getItem('goals') || '[]'),
    });
  }

  onGoalUpdate = goal => {
    let goals;

    // Update existing goal
    if (goal.id) {
      goals = [
        ...this.state.goals.filter(g => g.id !== goal.id),
        {
          ...goal,
        },
      ];
      // Create new goal
    } else {
      goals = [
        ...this.state.goals,
        {
          ...goal,
          id: Math.random()
            .toString(36)
            .substr(2, 26),
          createdAt: +new Date(),
          current: 0,
          colors: {
            fill: '#bbb',
            background: '#666',
          },
        },
      ];
    }

    this.setState({
      goals,
      isModalOpen: false,
    });

    localStorage.setItem('goals', JSON.stringify(goals));
  };

  onGoalDelete = goal => {
    this.setState(
      {
        goals: this.state.goals.filter(g => g.id !== goal.id),
        isModalOpen: false,
      },
      () => {
        localStorage.setItem('goals', JSON.stringify(this.state.goals));
      },
    );
  };

  onGoalEditModalOpen = goal => {
    this.setState({
      currentlyEditingGoal: goal,
      isModalOpen: true,
    });
  };

  daysIntoYear = date => {
    return (
      (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
        Date.UTC(date.getFullYear(), 0, 0)) /
      24 /
      60 /
      60 /
      1000
    );
  };

  yearProgress() {
    const year = new Date().getFullYear();
    const yearStartDate = +new Date(year, 0, 1);
    const now = +new Date();
    const delta = now - yearStartDate;

    return delta / 315360000;
  }

  render() {
    return (
      <Container>
        <Title>Life is short, make it count</Title>
        <Subtitle>
          Year progress: {this.yearProgress().toFixed(5)}%, (
          {this.daysIntoYear(new Date())} / 365,{' '}
          {365 - this.daysIntoYear(new Date())} days left till the end of {new Date().getFullYear()})
        </Subtitle>
        {this.state.goals.sort((a, b) => a.createdAt - b.createdAt).map(goal => (
          <Bar
            key={goal.id}
            goal={goal}
            progress={this.yearProgress()}
            onGoalEdit={this.onGoalEditModalOpen}
          />
        ))}
        <Button
          onClick={() =>
            this.setState({
              isModalOpen: !this.state.isModalOpen,
              currentlyEditingGoal: undefined,
            })
          }
        >
          + New Goal
        </Button>
        {this.state.isModalOpen && (
          <GoalEditModal
            goal={this.state.currentlyEditingGoal}
            onClose={() => this.setState({ isModalOpen: false })}
            onSubmit={this.onGoalUpdate}
            onGoalDelete={this.onGoalDelete}
          />
        )}
      </Container>
    );
  }
}

export default App;
