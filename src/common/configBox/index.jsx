import React from 'react';
import { Collapse, Form, Input, Select, Switch, Icon } from 'antd';

import './style.less';

const { Panel } = Collapse;
const { Option } = Select;

class ConfigBox extends React.PureComponent {
	static defaultProps = {};

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {}

	componentWillReceiveProps(nextProps) {}

	createOption = (options) => {
		return options.map((option, index) => {
			return (
				<Option value={option.value} key={index}>
					{option.text}
				</Option>
			);
		});
	};

	createPanelChildren = (arg, confItem, key) => {
		const { getFieldDecorator } = this.props.form;
		return arg.map((item, index) => {
			const newField = `${key}@-@${item.field}`;
			switch (item.type) {
				case 'string':
					return (
						<Form.Item label={item.text} key={index}>
							{getFieldDecorator(newField, {
								rules: [],
								initialValue: confItem[item.field] || null
							})(<Input />)}
						</Form.Item>
					);
				case 'select':
					return (
						<Form.Item label={item.text} key={index}>
							{getFieldDecorator(newField, {
								rules: [],
								initialValue: confItem[item.field] || null
							})(<Select>{this.createOption(item.data)}</Select>)}
						</Form.Item>
					);
				case 'boolean':
					return (
						<Form.Item label={item.text} key={index}>
							{getFieldDecorator(newField, {
								rules: [],
								initialValue: confItem[item.field] || null
							})(<Switch />)}
						</Form.Item>
					);
				case 'string':
					return (
						<Form.Item label={item.text} key={index}>
							{getFieldDecorator(newField, {
								rules: [],
								initialValue: confItem[item.field] || null
							})(<Input />)}
						</Form.Item>
					);
			}
		});
	};

	createContent = (config) => {
		const panelList = [];
		return Object.keys(config).map((key, index) => {
			const item = config[key];
			return (
				<Panel header={key} key={index}>
					{this.createPanelChildren(item.conf || [], item, key)}
				</Panel>
			);
		});
	};

	callback = () => {};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				const config = {};
				Object.keys(values).map((key, index) => {
					const keyArr = key.split('@-@');
					if (!config[keyArr[0]]) {
						config[keyArr[0]] = {};
					}
					config[keyArr[0]][keyArr[1]] = values[key]
				});
				this.props.save(config)
			}
		});
	};

	render() {
		const formItemLayout = {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 8 }
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 16 }
			}
		};
		return (
			<div className="aux_configBox">
				<div className="aux_conf_title">
					<span style={{ display: 'inline-block', fontWeight: '500' }}>页面配置</span>
					<ul className="rightBox">
						<li className="aux_li">
							<Icon type="save" onClick={this.handleSubmit} />
						</li>
					</ul>
				</div>
				<Form {...formItemLayout}>
					<Collapse onChange={this.callback}>{this.createContent(this.props.config)}</Collapse>
				</Form>
			</div>
		);
	}
}

ConfigBox = Form.create()(ConfigBox);

export default ConfigBox;
