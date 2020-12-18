import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
// import { settings } from '../../data/dataStore';
// import Creator from '../Creator/Creator';

class Column extends React.Component {
  /*
  state = {
    cards: this.props.cards || [],
  }
  */

  static propTypes = {	    
    title: PropTypes.node.isRequired,
    cards: PropTypes.array,
    name: PropTypes.node,
    icon: PropTypes.node,
  }

  /* addCard(title) {
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title,
          },
        ],
      }
    ));
  }
  */

  render() {
    const {title, icon, cards} = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>
        {cards.map(({key, ...cardsProps}) => (
          <Card key={key} {...cardsProps} />
        ))}
        {/*
        <div>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>
        */}
      </section>
    );
  }
}

export default Column;