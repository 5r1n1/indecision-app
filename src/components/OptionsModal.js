import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const OptionsModal = props =>
	<Modal
		isOpen = {!!props.selectedOption}
		contentLabel = 'Selected Option'
	>
		<p>{props.selectedOption}</p>
		<button onClick={props.closeModal}>
			Close
		</button>
	</Modal>

export default OptionsModal;