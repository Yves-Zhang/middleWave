import React from 'react';
import Curtain from './curtain';

import './style.less';

class PreviewBox extends React.PureComponent {
	static defaultProps = {};

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="aux_preview">
				<Curtain iframeUrl={this.props.iframeUrl} />
			</div>
		);
	}
}

export default PreviewBox;
