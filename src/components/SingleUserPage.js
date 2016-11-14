import React, { Component, PropTypes } from 'react';


class SingleUserPage extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {user : {}}; 
  }
  handleuser(json){
  	this.state.user = Object.assign({}, json);
  	this.updateState();
  }
  updateState(){
    this.setState({
       user:this.state.user
    })
  }

  componentDidMount() {
    fetch ('/api/users/'+this.props.id)
    	.then(response => {
    		return response.json();
		  })
		.then(json => this.handleuser(json));
  }

  render() {
    return 	<div>
    			<p>avator: {this.state.user.avator}</p>
    			<p>Name: {this.state.user.name}</p>
    			<p>Age: {this.state.user.age}</p>
    		</div>;
  }
}

export default SingleUserPage;
