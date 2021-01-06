import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    key: PropTypes.number,
  }

  render() {
    const {title, key} = this.props;

    return (
      <section key={key} className={styles.component}>
        <h3>{title}</h3>
      </section>
    );
  }
}

export default Card;