import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
// import Creator from '../Creator/Creator';

class List extends React.Component {
  
  /*
  state = {
    columns: this.props.columns || [],
  }
  */

  static propTypes = {
    title: PropTypes.node,
    description: PropTypes.node,
    columns: PropTypes.array,
    imageAddress: PropTypes.string,
    columnTitle: PropTypes.string,
    image: PropTypes.string,
  }

  static defaultProps = {
    // children: <p>I can do all the things!!!</p>,
    description: settings.defaultListDescription,
  }

  // POCZĄTEK "dodaj do this.state.columns nowy obiekt"
  /* addColumn(title) {
    this.setState(state => (
      {
        columns: [
          ...state.columns,
          {
            key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
            cards: [],
          },
        ],
      }
    ));
  } */
  // KONIEC "dodaj do this.state.columns nowy obiekt"

  render() {
    const {title, image, description, columns} = this.props;

    return (
      <section className={styles.component}>
        <Hero titleText={title} imageAddress={image}/>
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
        {/*
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
        </div>
        */}
      </section>
    );
  }
}

export default List;