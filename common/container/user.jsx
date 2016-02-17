/* eslint-disable no-unused-vars */
import React, {
    Component,
    PropTypes,
} from 'react';
/* eslint-enable no-unused-vars */

import {
    Link,
} from 'react-router';

import {
    connect,
} from 'react-redux';


export default class User extends Component {

    render() {

        return (
            <div>
                <link rel="stylesheet" href="/less/user.css" />
                <div className="container">
                    <table className="table table-bordered table-hover">
                        <caption>
                            {this.props.title}
                            <Link to="/">Lottery</Link>
                        </caption>
                        <thead>
                            <tr>
                                <th>序号</th>
                                <th>部门</th>
                                <th>姓名</th>
                                <th>手机号</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.users.map((user, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.department}</td>
                                    <td>
                                        <a
                                            href={user.image}
                                            target="_blank"
                                            data-toggle="tooltip"
                                        >
                                                <img src={user.image} className="img-thumbnail" />
                                        </a>
                                        {user.name}
                                    </td>
                                    <td>{user.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );

    }

}

User.propTypes = {
    title: PropTypes.string.isRequired,
    users: PropTypes.arrayOf(PropTypes.shape({
        department: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired).isRequired,
};

/**
 * 获取填充props的对象
 * @param {Object} state redux自动填充的原始state
 * @return {Object} 填充props的对象
 */
function select(state) {
    return Object.assign({
        title: '参加抽奖名单',
    }, state);
}

export default connect(select)(User);