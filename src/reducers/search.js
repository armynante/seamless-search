const initialState = {
  searchTerm : '',
  fetchedTerms: [''],
  isFetching: false
}

const terms = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_TERMS':
          return Object.assign({}, state, {
            isFetching: true,
            searchTerm: action.searchTerm
          })
        case 'RECEIVE_TERMS':
        console.log('RECEIVE_TERMS');
        console.log(action);
          return Object.assign({}, state, {
            isFetching: false,
            fetchedTerms: action.fetchedTerms
          })
        default:
            return state;
    }
};


export { terms }
