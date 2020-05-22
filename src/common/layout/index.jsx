import React from 'react';
import { Row, Col } from 'antd';

import './style.less';

class SubItem extends React.PureComponent {
	static defaultProps = {
		parentType: 'Layout'
	};

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="aux_layout_subItem" style={this.props.style}>
				{this.props.children}
			</div>
		);
	}
}

class Layout extends React.PureComponent {
	static defaultProps = {};

	constructor(props) {
		super(props);
		this.state = {};
	}

	createChildren = (children) => {
		let eleList = children;
		if (!Array.isArray(children)) {
			eleList = [ children ];
		}
		return eleList.map((item, index) => {
			if (item.type.name == 'SubItem' && item.props.parentType == 'Layout') {
				return (
					<Col span={item.props.span} key={`${index}_subItem`}>
						{item}
					</Col>
				);
			}
		});
	};

	render() {
		const { gutter, background } = this.props;
		return (
			<div className="aux_layout" style={{ background: background }}>
				<Row gutter={gutter || 16}>{this.createChildren(this.props.children)}</Row>
			</div>
		);
	}
}

Layout.SubItem = SubItem;

export default Layout;
