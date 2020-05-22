import React from 'react';

import './style.less';

class Curtain extends React.PureComponent {
	static defaultProps = {};

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="aux_curtain">
				<iframe className="aux_iframe" src={this.props.iframeUrl}></iframe>
			</div>
		);
	}
}

export default Curtain;
