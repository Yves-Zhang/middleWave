import React from 'react';
import { Provider, config } from '../Context';

function ConfigView(pageId = 'page_01') {
	return function(Comp) {
		return class extends React.PureComponent {
			constructor(props) {
				super(props);
				this.state = {
					config: null
				};
			}
			componentDidMount() {
				window.addEventListener('message', (event) => {
					if (event.data.type == 'change') {
						this.setState({
							config: event.data.config
						});
					}
				});
			}
			render() {
				return (
					<Provider value={{ pageId: pageId, config: this.state.config }}>
						<Comp {...this.props} />
					</Provider>
				);
			}
		};
	};
}

export default ConfigView;
