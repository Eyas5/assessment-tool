import React, { Component } from "react";
import "./login-admin.css";
import { withRouter } from "react-router-dom";
import tick from "../../assets/tick.png";
<<<<<<< HEAD
import loading from "../../assets/loading.svg";
import isAlphanumeric from "validator/lib/isAlphanumeric";
import { connect } from "react-redux";
import { logIn, userState, resetState } from "../../redux/actions";
import { UserSelector } from "../../redux/selectors";
import { fetchUsers } from "../../util/api";
import PropTypes from "prop-types";

const validate = obj => {
	return {
		username: isAlphanumeric(obj.username),
		password: isAlphanumeric(obj.password)
=======
import isAlphanumeric from "validator/lib/isAlphanumeric";
import {connect} from "react-redux";
import {logIn, userState, resetState} from "../../redux/actions";
import {fetchUsers} from "../../util/api";
import {userSelector} from "../../redux/selectors";
import PropTypes from "prop-types";


const validate = (obj)=>{
	return {
		username:isAlphanumeric(obj.username),
		password:isAlphanumeric(obj.password)
>>>>>>> feature/login
	};
};

class LoginForm extends Component {
<<<<<<< HEAD
	constructor(props) {
=======
	constructor(props){
>>>>>>> feature/login
		super(props);
		this.state = {
			username: "",
			password: "",
<<<<<<< HEAD
			apiusers: {},
			loader: false
		};
	}

	activateLoader = () => {
		this.setState({ loader: !this.state.loader });
	};

	deactivateLoader = () => {
		this.setState({ loader: false });
	};

	resetProps = () => {
		this.props.reset();
		this.props.history.push("/app/home");
	};

	navigate = nextProps => {
		nextProps.user.id !== "failed" || nextProps.user.id !== undefined
			? this.props.history.push(`/app/user/${nextProps.user[0].id}`)
			: this.resetProps();
	};

	handleLogin = e => {
		e.preventDefault();
		if (this.state.apiusers.status === 200) {
			let users = Object.values(this.state.apiusers.data);
			let user = {
				id: this.state.username,
				accoount: this.state.password
			};
			let check = users.filter(
				item => item.id === user.id && item.accoount === user.account
			);
			let checked = { ...check };
			if (check.length === 1) {
				this.props.login(checked);
				console.log("Success!", checked);
			} else {
				let failobject = {
					id: "failed",
					account: null,
					firstName: null,
					lastName: null,
					phoneNumber: null
				};
				this.props.login(failobject);
				console.log("Failed", failobject);
			}
		} else if (this.state.apiusers.status === 404) {
			console.log("error-section!", this.state.apiusers.status);
		} else {
			console.log("error-section-two!", this.state.apiusers.status);
		}
	};

	componentWillMount() {
		fetchUsers(data => this.setState({ apiusers: data }));
	}

	componentWillReceiveProps(nextProps) {
		if (this.props !== nextProps) {
			console.log(nextProps);
			this.activateLoader();
			setInterval(() => this.deactivateLoader(), 10000);
			setInterval(() => this.navigate(nextProps), 10000);
		} else {
			console.log("componentWillReceiveProps-error");
		}
	}

	render() {
		//this.getUsers()
		const errors = validate(this.state);
		return (
			<div className="login">
				<div className={this.state.loader ? "show-loader" : "loading"}>
					<img src={loading} alt="loading" className="loading-image" />
				</div>
				<p className="title">Admin Sign-In</p>
				<form
					onSubmit={e => {
						this.handleLogin(e);
					}}
				>
					<input
						type="text"
						placeholder="Username"
						className="form"
						onChange={e => this.setState({ username: e.target.value })}
						value={this.state.username}
					/>
					<span className="username">
						<img
							src={tick}
							alt="tick"
							className={errors.username ? "valid" : "tick"}
						/>
					</span>
					<input
						type="password"
						placeholder="Password"
						className="form"
						onChange={e => this.setState({ password: e.target.value })}
						value={this.state.password}
					/>
					<span className="password">
						<img
							src={tick}
							alt="tick"
							className={errors.password ? "valid" : "tick"}
						/>
					</span>
					<input type="submit" value="Login" />
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: UserSelector(state)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		login: user => dispatch(logIn(user)),
		insertuser: users => dispatch(userState(users)),
		reset: () => dispatch(resetState())
	};
};

LoginForm.propTypes = {
	user: PropTypes.object,
	login: PropTypes.func,
=======
			apiusers:{},
			loader: false
		};
	}

resetProps = ()=>{
	let message= "Wrong Username or Password, Please try again!";
	this.props.reset();
	this.props.history.push("/app/home");
	alert(message);
}

navigate =(nextProps)=>{
	console.log("NextProps", nextProps);
	if(nextProps.user[0].id==="failed" ){
		this.resetProps();
	}else{
		this.props.history.push(`/app/user/${this.props.user.id}`);
	}		
}

handleLogin = (e)=>{
	e.preventDefault();
	if(this.state.apiusers.status===200){
		let users = Object.values(this.state.apiusers.data);
		let user ={id: this.state.username,
			account: this.state.password};
		let check = users.filter((item)=>item.id===user.id && item.account===user.account);
		let checked ={...check};
		if(check.length===1){
			this.props.login(checked);
			console.log("Success!",checked );
		}else{
			let failobject = [{
				"id": "failed",
				"account": null,
				"firstName": null,
				"lastName": null,
				"phoneNumber": null
			}];
			this.props.login(failobject);
			console.log("Failed",failobject);
		}
	}else if(this.state.apiusers.status===404){
		console.log("error-section!", this.state.apiusers.status);
	}else{
		console.log("error-section-two!", this.state.apiusers.status);
	}
}

componentWillMount(){
	fetchUsers((data) => this.setState({apiusers:data}));
}

componentWillReceiveProps(nextProps){
	this.navigate(nextProps);
}

render() {
	const errors = validate(this.state);
	return (
		<div className="login">
			<p className='title'>Admin Sign-In</p>
			<form onSubmit={(e)=>{this.handleLogin(e);}}>
				<input type="text" 
					placeholder="Username" 
					className="form"
					onChange={e=>this.setState({username:e.target.value})}
					value={this.state.username}/>
				<span className="username">
					<img src={tick} alt="tick" className={errors.username ? "valid" : "tick"}/>
				</span>
				<input type="password" 
					placeholder="Password" 
					className="form"
					onChange={e=>this.setState({password:e.target.value})}
					value={this.state.password}/>
				<span className="password">
					<img src={tick} alt="tick" className={errors.password ? "valid" : "tick"}/>
				</span>
				<input type="submit" value="Login"/>
			</form>
		</div>
	);
}
}

const  mapStateToProps= (state)=>{
	return { 
		user: userSelector(state)
	};
};

const mapDispatchToProps = (dispatch)=>{
	return { 
		login: (user)=>dispatch(logIn(user)),
		insertuser: (users)=>dispatch(userState(users)),
		reset: ()=>dispatch(resetState())
	};
};

LoginForm.propTypes ={
	user: PropTypes.object,
	login:PropTypes.func,
>>>>>>> feature/login
	insertuser: PropTypes.func,
	reset: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(
	withRouter(LoginForm)
);
