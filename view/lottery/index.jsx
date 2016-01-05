import React, {
    Component,
    PropTypes,
}from 'react';
import Layout from '../layout';

import Background from './background';


export default class Index extends Component {

    render() {

        return (
            <Layout title={this.props.title}>
                <link rel="stylesheet" href="css/screen.css" />
                <Background />
				<div id="wrapper">
					<aside className="zone-container">
						<div className="trigger">
							<i className="icon icon-filter"></i>
						</div>
						<div className="board">
						
						</div>
					</aside>
					
					<section id="container" className="clearfix">
            
						<div id="copyleft">
							<span>宝</span>
                            <span>宝</span>
                            <span>树</span>
						</div>
            
						<section id="content" className="clearfix">
							<div className="flicker">
								<img src="img/logo.png" width="256"/>
							</div>
							<div className="name-container clearfix">
                                <span className="name"></span>
                            </div>
						</section>
					</section>
				</div>
				<script src="js/jquery-2.0.3.min.js"></script>
				<script src="js/name.js"></script>
				<script src="js/config.js"></script>
				<script src="js/lucky.js"></script>
				<script src="js/app.js"></script>
            
            </Layout>
        );

    }

}

Index.propTypes = {
    title: PropTypes.string.isRequired,
};