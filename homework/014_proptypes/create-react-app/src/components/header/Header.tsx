import React from 'react';
import './Header.css';
import { Props } from '../../types/types';

export class Header extends React.Component<Props> {
  render() {
    return (
      <header className="header">
        <h1>{this.props.name}</h1>
      </header>
    );
  }
}
