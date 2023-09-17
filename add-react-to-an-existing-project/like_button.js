'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
console.log(domContainer)
console.log(domContainer.id)
const root = ReactDOM.createRoot(domContainer);
console.log(root)
console.log(e(LikeButton))
console.log(LikeButton)
root.render(e(LikeButton));