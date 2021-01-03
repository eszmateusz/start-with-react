import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {infoContent} from '../../data/dataStore';
import PropTypes from 'prop-types';

const Info = () => (
  <Container>
    <Hero titleText={infoContent.title} backgroundImage={infoContent.image} />
    <p>{infoContent.content}</p>
  </Container>
);

Info.propTypes = {
  title: PropTypes.node,
  content: PropTypes.node,
  image: PropTypes.string,
};

export default Info;