import React from 'react'
import { Provider, config } from '../Context'

function ConfigView(pageId = 'page_01') {
	return function (Comp) {
		return class extends React.PureComponent {
			componentDidMount() {

			}
			render() {
				return (
					<Provider value={{ pageId: pageId, config: config }}>
						<Comp {...this.props}>{this.props.children}</Comp>
					</Provider>
				)
			}
		}
	};
}

export default ConfigView;