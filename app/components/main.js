var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

require('../main.css');

var Main = React.createClass({
  render: function() {

    //var segment = this.props.location.pathname.split("/")[1] || "root";
    console.log(this.props.location.pathname);

    return (
      <div className='main-container'>
        <ReactCSSTransitionGroup
          transitionName="appear"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {React.cloneElement(this.props.children, {key:this.props.location.pathname})}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

module.exports = Main;