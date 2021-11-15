import React from 'react';
import './App.css';
import { AddBlock } from './components/addBlock/AddBlock';
import { Header } from './components/header/Header';
import { TaskBlock } from './components/taskBlock/TaskBlock';

interface State {
  text: string;
  hasDeletedTask: boolean;
  isChecked: boolean;
}

export class App extends React.Component<{}, State> {
  constructor(props:{}) {
    super(props);
    this.state = { text: '', hasDeletedTask: false, isChecked: false };
    this.textArr = localStorage.getItem('textArr') ? JSON.parse(localStorage.getItem('textArr') as string) : [];
    this.addTask = this.addTask.bind(this);
    this.dellTask = this.dellTask.bind(this);
    this.doneTask = this.doneTask.bind(this);
  }

  textArr: any;

  changeText = (event: any) => {
    this.setState({ text: event.target.value });
  };

  addTask() {
    this.textArr.push({ text: this.state.text, done: false });
    localStorage.setItem('textArr', JSON.stringify(this.textArr));
    this.setState({ text: '' });
  }

  dellTask(index: number) {
    this.setState({ hasDeletedTask: true });
    this.textArr.splice(index, 1);
    localStorage.setItem('textArr', JSON.stringify(this.textArr));
    this.setState({ hasDeletedTask: false });
  }

  doneTask(index: number) {
    this.setState({ isChecked: !this.state.isChecked });
    this.textArr[index].done = !this.textArr[index].done;
    localStorage.setItem('textArr', JSON.stringify(this.textArr));
    // this.setState({isChecked: false});
  }

  render() {
    return (
      <div className="App">
        <Header name="ToDo лист" done />
        <body>
          <AddBlock text={this.state.text} onChange={this.changeText} onClick={this.addTask} />
          {this.textArr.map((item: any, index: number) => (
            <TaskBlock
              text={item.text}
              done={item.done}
              key={index}
              doneTask={() => this.doneTask(index)}
              onClick={() => this.dellTask(index)}
            />
          ))}
        </body>
      </div>
    );
  }
}

export default App;
