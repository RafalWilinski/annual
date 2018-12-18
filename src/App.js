import React, { Component } from 'react';
import styled from 'styled-components';
import Bar from './Bar';

const Title = styled.h1`
  color: white;
  margin-bottom: 60px;
`;

const Container = styled.div`
  padding: 10px;
`;

class App extends Component {
  state = {
    goals: [
      {
        name: 'Run',
        unit: 'KM',
        target: 1000,
        current: 253,
        colors: {
          fill: '#bbb',
          background: '#666',
        },
      },
      {
        name: 'Blogposts',
        unit: 'blogposts',
        target: 10,
        current: 6,
        colors: {
          fill: '#bbb',
          background: '#666',
        },
      },
      {
        name: 'Speak at meetups / conferences',
        unit: 'talks',
        target: 5,
        current: 4,
        colors: {
          fill: '#bbb',
          background: '#666',
        },
      },
      {
        name: 'Pushups',
        unit: 'pushups',
        target: 50000,
        current: 41723,
        colors: {
          fill: '#bbb',
          background: '#666',
        },
      },
      {
        name: 'Read books',
        unit: 'books',
        target: 12,
        current: 11,
        colors: {
          fill: '#bbb',
          background: '#666',
        },
      },
    ],
  };

  componentDidMount() {
    // Load from localstorage and push to state.goals
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
        {this.state.goals.map(goal => (
          <Bar key={goal.name} goal={goal} progress={this.yearProgress()} onGoalEdit={this.onGoalEditModalOpen}/>
        ))}
      </Container>
    );
  }
}

export default App;
