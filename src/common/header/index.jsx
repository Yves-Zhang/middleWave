import React from 'react';
import { Row, Col } from 'antd';

import './style.less';

class Header extends React.PureComponent {
	static defaultProps = {};

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { gutter } = this.props;
		return (
			<div className="aux_hearder">
			</div>
		);
	}
}

export default Header;
