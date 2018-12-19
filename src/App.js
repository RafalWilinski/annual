import React, { Component } from 'react';
import styled from 'styled-components';
import Bar from './Bar';
import GoalEditModal from './GoalEditModal';

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
`

const Container = styled.div`
  padding: 10px;
`;

const Button = styled.div`
  color: black;
  padding: 10px;
  background-color: #bbb;
  margin: auto;
  width: 100px;
  cursor: pointer;
  text-align: center;
`;

class App extends Component {
  state = {
    yearProgress: 93.32,
    goals: []
  };

  componentDidMount() {
    // Load from localstorage and push to state.goals
    this.setState({
      goals: JSON.parse(localStorage.getItem('goals') || '[]')
    });
  }

  onGoalEditModalOpen(goal) {

  }

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
        <Subtitle>Year progress: {this.yearProgress().toFixed(5)}%</Subtitle>
        {this.state.goals.map(goal => (
          <Bar key={goal.name} goal={goal} progress={this.yearProgress()} onGoalEdit={this.onGoalEditModalOpen}/>
        ))}
        <Button>
          + New Goal
        </Button>
        <GoalEditModal />
      </Container>
    );
  }
}

export default App;
