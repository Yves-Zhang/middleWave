import React from 'react';
import { Row, Col, Icon } from 'antd';

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
				<div className="title">Aux</div>
				<ul className="rightBox">
					<li>
						<Icon type="save" />
					</li>
				</ul>
			</div>
		);
	}
}

export default Header;
