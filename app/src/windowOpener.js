import PropTypes from 'prop-types';
import React from 'react';
let browser = null;
let popup = null;
let timer = null;

function watcher () {
	// if popup is null then let's clean the intervals.
	if (popup === null) {
		clearInterval(timer);
		timer = null;
		// if popup is not null and it is not closed, then let's set the focus on it... maybe...
	} else if (popup !== null && !popup.closed) {
		popup.focus();
		// if popup is closed, then let's clean errthing.
	} else if (popup !== null && popup.closed) {
		clearInterval(timer);
		browser.focus();
		// the onCloseEventHandler it notifies that the child has been closed.
		browser.onClose('child was closed');
		timer = null;
		popup = null;
	}
}

export const WindowOpener = (props) => {
	browser = window.self;
    
	browser.onOpen = () => {
	}
    
	browser.onClose = () => {
	}

	const onClickHandler = () => {
	
		const { url, name, opts } = props;
		// if there is  already a child open, let's set focus on it
		if (popup && !popup.closed) {
			popup.focus();

			return ;
		}
		// we open a new window.
		popup = browser.open(url, name, opts);

		setTimeout(() => {
			// The opener object is created once and only if a window has a parent
			popup.opener.onOpen('child was opened');
		}, 0);

		if (timer === null) {
			// each two seconds we check if the popup still open or not
			timer = setInterval(watcher, 2000);
		}

		return

	}

	const { children } = props;
	return (
		<button type="button" onClick={onClickHandler}>
			{children}
		</button>
	);
	
}

WindowOpener.propTypes = {
	url: PropTypes.string.isRequired,
	bridge: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
	name: PropTypes.string,
	opts: PropTypes.string
}
WindowOpener.defaultProps = {
	name: 'Cool popup',
	opts: `dependent=${1}, alwaysOnTop=${1}, alwaysRaised=${1}, alwaysRaised=${1}, width=${300}, height=${300}`
}

// export default WindowOpener;