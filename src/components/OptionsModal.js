import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const OptionsModal = props =>
	<Modal
		isOpen = {!!props.selectedOption}
		onRequestClose = {props.closeModal}
		contentLabel = 'Selected Option'
		closeTimeoutMS = {600}
		className="modal"
	>
		<h3 className="modal__title">Selected Option</h3>
		<p className="modal__body">{props.selectedOption}</p>
		<button className="button" onClick={props.closeModal}>
			Close
		</button>
	</Modal>

export default OptionsModal;