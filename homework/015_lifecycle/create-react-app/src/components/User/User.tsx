import React, { RefObject } from 'react';
import './User.css';
import { ThemeContextConsumer, ThemeContextState } from '../../contexts/ThemeContext';
// import LikeButton from '../LikeButton/LikeButton';

interface Props {
  title?: string;
  firstName?: string;
  lastName?: string;
  picture?: string;
  addLike?: () => void;
  removeLike?: () => void;
  className?: string;
}

interface State {
  liked: boolean
}

export default class User extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleLike = this.handleLike.bind(this);
    this.state = { liked: false };
    this.textDiv = React.createRef();
  }

  componentWillUnmount(): void {
    console.log('Комментарий размонтирован');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleLike(e: any) {
    !this.state.liked
      ? this.props.addLike && this.props.addLike()
      : this.props.removeLike && this.props.removeLike();
    this.setState({
      liked: !this.state.liked,
    });
  }

  textDiv: RefObject<HTMLDivElement>;

  render() {
    return (
      <ThemeContextConsumer>
        {
            (context: Partial<ThemeContextState>) => (
              <div className={`user ${this.props.className}`}>
                <span className={`user__user-name ${context.darkTheme && ' user_name_dark'}`}>
                  {`${this.props.title} 
          ${this.props.firstName} 
          ${this.props.lastName}`}
                </span>
                <figure className="user__photo">
                  <img src={this.props.picture} alt="Load Error" />
                </figure>
              </div>
            )
  }
      </ThemeContextConsumer>
    );
  }
}
