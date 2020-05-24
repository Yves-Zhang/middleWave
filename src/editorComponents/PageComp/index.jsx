import React from 'react';
import { Props } from './proto';
import HocWrapper from '../HocWrapper'

import './style.less';

class PageComp extends React.Component {
    static defaultProps = new Props()

    componentDidMount() {
        this.props.didMountCallBack(this)
    }

    render() {
        return (
            <div className="aux_pageComp">
                <img className="bgImage" src={this.props.bgImage} alt="" style={{ width: '100vw' }} />
                {this.props.children}
            </div>
        );
    }
}

export default HocWrapper(PageComp);
