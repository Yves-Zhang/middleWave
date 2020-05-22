import React from 'react';
import { Button } from 'antd'
import { SpaAssyConnect } from 'spaassy-redux'
import { setTest } from '@store/test/test_action'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom'
import routers from './routers'

import './index.less'

const namespace = process.env.SYSTEMNAME

@SpaAssyConnect(namespace)(state => ({ store: state }), { setTest: setTest })
class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="homeContent">
                {renderRoutes(routers)}
            </div>
        )
    }
}

export default Home;