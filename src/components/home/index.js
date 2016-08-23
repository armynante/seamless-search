import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Header from '../header';
import { toggleTodo } from '../../actions/todos';
import AutoComplete from 'material-ui/AutoComplete';

if(process.env.WEBPACK) require('./index.scss');




class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
    };
  }

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };
  
	render() {
		const { dispatch, todos } = this.props;

		return (
      <div>
        <div>
           <AutoComplete
             hintText="Type anything"
             dataSource={this.state.dataSource}
             onUpdateInput={this.handleUpdateInput}
           />
           <AutoComplete
             hintText="Type anything"
             dataSource={this.state.dataSource}
             onUpdateInput={this.handleUpdateInput}
             floatingLabelText="Full width"
             fullWidth={true}
           />
         </div>
				<Link to='/page'>
					<button>Go to page</button>
				</Link>
			</div>
		);
	}
}

export default connect((state) => {
	const { todos } = state;
	return { todos };
})(Home);
