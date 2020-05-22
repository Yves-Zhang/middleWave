import React from 'react';
import { Button } from 'antd';
import { Props } from './proto';

class AuxButton extends React.PureComponent {
	static defaultProps = new Props();

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Button
				style={this.props.style}
				ghost={this.props.ghost}
				icon={this.props.icon}
				loading={this.props.loading}
				size={this.props.size}
				target={this.props.target}
				type={this.props.type}
				onClick={this.props.onClick}
			>
				{this.props.children}
			</Button>
		);
	}
}

export default AuxButton;
