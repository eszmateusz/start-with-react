import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {navSearchResults} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: navSearchResults(state, props.match.params.title),
});

export default connect(mapStateToProps)(SearchResults); 