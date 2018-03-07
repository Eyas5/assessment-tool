import React from "react";
import "./search.scss";
import propTypes from "prop-types";

class Search extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			name: ""
		};
	}
  handleChange = (e)=>{  
  	const name = e.target.value;
  	this.setState({
  		name 
  	});
  	const filteredList = this.props.classes.filter(singleClass =>{
  		return singleClass.name.toLowerCase().includes(name.toLowerCase());
  	});
  	this.props.onChange(filteredList);
  }
  render() {     
  	return (
  		<section className="container">
  			<h2>Teacher Dashboard</h2>
  			<label htmlFor="classes" className="label-classes">Classes</label><br/>
  			<i className="fa fa-search"></i>
  			<input
  				type="text"
  				id="classes"
  				className="search-input"
  				placeholder="search by name"
  				value={this.state.name}
  				onChange={e=>this.handleChange(e)}
  			/>
  		</section>
  	);
  }
}

export default Search;

Search.propTypes = {
	classes: propTypes.array
};