import React from 'react';

import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionsModal from './OptionsModal';

export default class IndecisionApp extends React.Component {
	state = {
		appTitle: 'Indecision App',
		appSubtitle: 'Put your life in the hands of a computer!',
		options: this.props.options,
		selectedOption: undefined
	};

	addOption = item => {
		if (!item)
			return 'Enter valid value to add item';
		else if (this.state.options.indexOf(item) > -1)
			return 'This option already exists';
		this.setState (() => ({options: this.state.options.concat(item)}));
	};

	removeOption = idx => {
		this.setState (() => ({
			options: this.state.options
				.filter ((item, index) => index !== idx)
		}));
	};
	
	selectOption = () => {
		const r = Math.floor(Math.random() * this.state.options.length);
		this.setState({selectedOption: this.state.options [r]});
	}

	removeAll = () => {
		this.setState (() => ({
			options: []
		}));
	};

	handleCloseModal = () => this.setState({ selectedOption: undefined });

	componentDidMount = () => {
		try {
			let options = JSON.parse (localStorage.getItem('options'));
			if (options.length) this.setState (() => ({ options }))  
		} catch (e) {}
	};

	componentDidUpdate = (prevProps, prevState) => {
		if (this.state.options.length !== prevState.options.length)
		localStorage.setItem ('options', JSON.stringify (this.state.options))
	};

	render () {
		return (
			<div>
				<Header title={this.state.appTitle} subtitle={this.state.appSubtitle}/>
				<Action opt={this.state.options} rmvAll={this.removeAll} handlePick={this.selectOption}/>
				<Options opt={this.state.options} rmvOpt={this.removeOption}/>
				<AddOption addOpt={this.addOption}/>
				<OptionsModal selectedOption={this.state.selectedOption} closeModal={this.handleCloseModal}/>
			</div>
		);
	};
};
  
IndecisionApp.defaultProps = {options: ['Finish ReactJS Course', 'Contribute to PRaaS', 'Backup Sarayu Machine', 'Install Debian 9 in Sarayu Computer']}