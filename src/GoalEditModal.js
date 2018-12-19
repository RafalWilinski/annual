import React from 'react';
import styled from 'styled-components';

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
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.goal ? this.props.goal.name : '',
      unit: this.props.goal ? this.props.goal.unit : '',
      target: this.props.goal ? this.props.goal.target : '',
    };
  }

  render() {
    const { onSubmit } = this.props;

    return (
      <Backdrop onClick={() => this.props.onClose()}>
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
              type='number'
              pattern="[0-9]*"
              onChange={e => this.setState({ target: e.target.value })}
              value={this.state.target}
              placeholder="Goal Target"
            />
            <input type="submit" value="Submit" />
          </form>
        </Window>
      </Backdrop>
    );
  }
}

export default Modal;
