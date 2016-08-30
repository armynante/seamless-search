import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router';
import AutoComplete from 'material-ui/AutoComplete';
import { Paper } from 'material-ui';

if(process.env.WEBPACK) require('./index.scss');


// const style = {
//   height: 'auto',
//   width: '50vw',
//   margin: 'auto',
//   padding: 20,
//   textAlign: 'center',
//   display: 'inline-block',
// };


class SearchTermBar extends Component {
  render() {
    const { terms, fetchTerms } = this.props
    console.log("terms")
    console.log(terms.fetchedTerms.map((thread) => thread.title))
    return (
      <div>
           <AutoComplete
             hintText="Cheese Pizza"
             dataSource={terms.fetchedTerms.map((thread) => thread.title)}
             onUpdateInput={(term) => fetchTerms(term)}
             floatingLabelText="Search Term"
             fullWidth={true}
           />
      	<Link to='/page'>
      		<button>Go to pages</button>
        </Link>
    	</div>
    )
  }
}


// SearchTermBar.propTypes = {
//   terms: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)).isRequired
// }

export default SearchTermBar
