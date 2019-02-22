import React from 'react';

export default class AddOption extends React.Component {
	state = { error: undefined };

	onFormSubmit = e => {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		const error = this.props.addOpt (option)
		this.setState (() => ({ error }))
		if (option) e.target.elements.option.value = '';
	};
	
	render () {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.onFormSubmit}>
					<input type="text" name="option"/>
					<button>Add option</button>
				</form>
			</div>
		);
	};
};