import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { showClasses } from "../../redux/actions";
import { classSelector } from "../../redux/selector";
import { fetchClassess } from "../../API";
import SortableTable from "../SortableTable";
import Search from "../Search";
import Breadcrumb from "../Breadcrumb";
import "./sortableTable.css";

class SortableTableContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showingClasses: []
		};
	}
	componentDidMount() {
		this.showAllClasses();
	}
  showAllClasses = () => {
  	fetchClassess()
  		.then(res => {
  			this.props.showClasses(res.data);
  			this.setState({ showingClasses: this.props.classes });
  		})
  		.catch(err => console.log(err));
  };
  handleSortData = (sortBy,isReversed,handleSortedData)=>{
  	const sorted = handleSortedData(this.props.classes, sortBy, isReversed);
  	this.setState({ showingClasses: sorted });
  }

  render(){
  	return (
  		<section>
  			<Breadcrumb/>
  			<Search
  				classes={this.props.classes}
  				onChange={(classes) => this.setState({classes})}
  			/>
  			<SortableTable
  				classes={this.state.showingClasses}
  				handleSortData = {this.handleSortData}
  			/>
  		</section>      
  	);
  }
}
const mapStateToProps = state => {
	return {
		classes: classSelector(state)
	};
};
const mapDispatchToProps = dispatch => {
	return {
		showClasses: classes => dispatch(showClasses(classes))
	};
};

SortableTableContainer.propTypes = {
	showClasses: propTypes.func,
	classes: propTypes.array 
};
export default connect(mapStateToProps, mapDispatchToProps)(
	SortableTableContainer
);


