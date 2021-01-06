import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator';

class Column extends React.Component {

  static propTypes = {	    
    title: PropTypes.node.isRequired,
    cards: PropTypes.array,
    name: PropTypes.node,
    icon: PropTypes.node,
    addCard: PropTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const {title, icon, cards, addCard} = this.props;

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
        <div>
          <Creator 
            text={settings.cardCreatorText} 
            action={addCard} />
        </div>
      </section>
    );
  }
}

export default Column;