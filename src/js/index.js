/**
 * Created by wanghl on 2017/4/1.
 */

var React = require('react');
var ReactDOM = require('react-dom');

import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/indexBody';

class Index extends React.Component{
    render(){
        return(
            <div>
                <ComponentHeader/>
                <BodyIndex/>
                <ComponentFooter/>
            </div>
        );
    }
}

ReactDOM.render(<Index/>, document.getElementById('example'));