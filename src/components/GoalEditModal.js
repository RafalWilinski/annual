import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Title = styled.h1`
  color: white;
  font-weight: 100;
  margin-bottom: 20px;
`;

const Backdrop = styled.div`
  content: '';
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Window = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: relative;
  background-color: #222;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Input = styled.input`
  display: block;
  margin: 5px;
  font-family: monospace;
  border: 0;
  margin: 10px 0;
  font-size: 12px;
  padding: 2px 6px;
`;

const Submit = styled.input`
  color: black;
  padding: 10px;
  background-color: #bbb;
  margin: 5px auto;
  width: 100px;
  cursor: pointer;
  text-align: center;
  border: 0;
  font-family: monospace;
  font-size: 14px;
  text-align: center;
  display: block;
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      current: 0,
      target: 0,
      unit: '',
      ...this.props.goal,
    };
  }

  render() {
    const { onSubmit, onGoalDelete, onClose, goal } = this.props;

    return (
      <Backdrop onClick={() => onClose()}>
        <Window
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <Title>Add / Edit goal</Title>
          <form onSubmit={e => onSubmit(this.state)}>
            <Input
              type="text"
              onChange={e => this.setState({ name: e.target.value })}
              value={this.state.name}
              placeholder="Goal Name"
            />
            <Input
              type="text"
              onChange={e => this.setState({ unit: e.target.value })}
              value={this.state.unit}
              placeholder="Goal Unit"
            />
            <Input
              type="number"
              pattern="[0-9]*"
              onChange={e => this.setState({ target: e.target.value })}
              value={this.state.target}
              placeholder="Goal Target"
            />
            {goal && goal.id && (
              <>
                <label style={{color: 'white'}}htmlFor="progress">Progress</label>
                <Input
                  id="progress"
                  type="number"
                  pattern="[0-9]*"
                  onChange={e => this.setState({ current: e.target.value })}
                  value={this.state.current}
                  placeholder="Goal Progress"
                />
                <Button onClick={() => onGoalDelete(goal)}>Delete Goal</Button>
              </>
            )}
            <Submit type="submit" value="Save" />
          </form>
        </Window>
      </Backdrop>
    );
  }
}

export default Modal;
