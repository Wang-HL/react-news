/**
 * Created by wanghl on 2017/4/4.
 */

import React from 'react';

export default class BodyIndex extends React.Component{

    componentWillMount(){
        //定义逻辑
        console.log("bodyIndex --componentWillMount");
    };
    componentDidMount(){
        console.log("bodyIndex --componentDidMount");
    };

    render(){
        var userName = 'ana';
        var boolButton = false;
        return(
            <div>
                <h1>这里是主体</h1>
                <p>{userName == '' ? '用户名为空' : '欢迎' + userName}</p>
                <p><input type="button" value='按钮' disabled={boolButton}/></p>
            </div>
        )
    }
}