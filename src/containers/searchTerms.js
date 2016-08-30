import { connect } from 'react-redux'
import { fetchTerms, requestTerms } from '../actions/search.js'
import SearchTermBar from '../components/searchTermBar/index.js';



function mapStateToProps(state) {
  console.log(state);
  return {
    terms: state.terms
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTerms: (term) => {
      dispatch(fetchTerms(term))
    }
  }
}

const SearchTerms = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchTermBar)


export default SearchTerms
