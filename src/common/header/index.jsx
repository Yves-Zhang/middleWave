import React from 'react';
import { Row, Col, Icon } from 'antd';

import './style.less';

class Header extends React.PureComponent {
	static defaultProps = {};

	constructor(props) {
		super(props);
		this.state = {};
	}

	save = () => {
		console.log('save')
	};

	render() {
		const { gutter } = this.props;
		return (
			<div className="aux_hearder">
				<div className="title">Aux</div>
			</div>
		);
	}
}

export default Header;
