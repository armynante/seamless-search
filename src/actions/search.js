import axios from 'axios'


export const requestTerms = (term) => {
	return {
		type: 'REQUEST_TERMS',
		term
	};
};

export const receiveTerms = (json) =>{
  console.log('fetching');
  return {
    type: 'RECEIVE_TERMS',
    fetchedTerms: json.data.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export const fetchTerms = (term) => {
  return (dispatch) => {
    // dispatch(requestTerms(term));

    return axios.get(`https://www.reddit.com/r/${term}.json`)
      .then((json) => {
        dispatch(receiveTerms(json))
      })
  }
}
