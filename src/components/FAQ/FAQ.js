import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {FAQContent} from '../../data/dataStore';
import PropTypes from 'prop-types';

const FAQ = () => (
  <Container>
    <Hero 
      titleText={FAQContent.title} 
      image={FAQContent.image} />
    <p>{FAQContent.content}</p>
  </Container>
);

FAQ.propTypes = {
  title: PropTypes.node,
  content: PropTypes.node,
  image: PropTypes.string,
};

export default FAQ;