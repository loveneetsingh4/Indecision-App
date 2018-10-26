"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecsionApp = function (_React$Component) {
  _inherits(IndecsionApp, _React$Component);

  function IndecsionApp(props) {
    _classCallCheck(this, IndecsionApp);

    var _this = _possibleConstructorReturn(this, (IndecsionApp.__proto__ || Object.getPrototypeOf(IndecsionApp)).call(this, props));

    _this.handledeleteoption = _this.handledeleteoption.bind(_this);
    _this.handlepick = _this.handlepick.bind(_this);
    _this.handleonsubmit = _this.handleonsubmit.bind(_this);
    _this.handledeleteOptiond = _this.handledeleteOptiond.bind(_this);
    _this.state = {
      options: props.options

    };

    return _this;
  }

  _createClass(IndecsionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem('options');
        var options = JSON.parse(json);
        if (options) {
          this.setState(function () {
            return { options: options };
          });
        }
      } catch (error) {}
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
      }
    }
  }, {
    key: "componentWillUnMount",
    value: function componentWillUnMount() {
      console.log("unmounting data");
    }
  }, {
    key: "handledeleteoption",
    value: function handledeleteoption() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: "handledeleteOptiond",
    value: function handledeleteOptiond(optiontoremove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optiontoremove !== option;
          })

        };
      });
    }
  }, {
    key: "handlepick",
    value: function handlepick() {
      var random = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[random];
      alert(option);
    }
  }, {
    key: "handleonsubmit",
    value: function handleonsubmit(option) {
      if (!option) {
        return 'enter the valid value of the syntext';
      } else if (this.state.options.indexOf(option) > -1) {
        return "value already exists in the element";
      }

      this.setState(function (prevState) {
        return { options: prevState.options.concat(option) };
      });
    }
  }, {
    key: "render",
    value: function render() {
      //const Title="Indecisions";

      return React.createElement(
        "div",
        null,
        React.createElement(Header, null),
        React.createElement(Action, {
          hasoption: this.state.options.length > 0,
          handlepick: this.handlepick
        }),
        React.createElement(Options, {
          option: this.state.options,
          handledeleteoptions: this.handledeleteoption,
          handledeleteOptiond: this.handledeleteOptiond
        }),
        React.createElement(Addoption, {
          handleonsubmit: this.handleonsubmit
        })
      );
    }
  }]);

  return IndecsionApp;
}(React.Component);

IndecsionApp.propsDefault = {
  options: []

};

var Header = function Header(props) {

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.Title
    ),
    React.createElement(
      "h2",
      null,
      "where is my future"
    )
  );
};

Header.defaultProps = {
  Title: "some valy"
  // class Header extends React.Component{
  //   render(){
  //             return (
  //                  <div>
  //                      <h1>{this.props.Title}</h1>
  //                      <h2>where is my future</h2>
  //                      </div>

  //             )

  //   }
  // }

};var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handlepick,
        disabled: !props.hasoption
      },
      "What should i do?"
    )
  );
};

// class Action extends React.Component{

//    render(){
//            return (
//              <div>
//                   <button   onClick={this.props.handlepick}
//                      disabled={!this.props.hasoption}
//                   >What should i do?</button>

//                  </div>

//            )

//    }

// }
var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handledeleteoptions },
      "removeall"
    ),
    props.option.length === 0 && React.createElement(
      "p",
      null,
      "please add value"
    ),
    props.option.map(function (option) {
      return React.createElement(OPtion, {
        key: option,
        optionText: option,
        handledeleteOptiond: props.handledeleteOptiond
      });
    })
  );
};
// class Options extends React.Component{

//   render(){
//                return (
//                 <div>
//                   <button onClick={this.props.handledeleteoptions}>removeall</button>
//                    {

//                   this.props.option.map((option)=> <OPtion key={option} optionText={option} />)
//                    }

//                     <OPtion />
//                 </div>
//  )
//                 }

// }
var OPtion = function OPtion(props) {
  return React.createElement(
    "div",
    null,
    props.optionText,
    React.createElement(
      "button",
      {
        onClick: function onClick(e) {
          props.handledeleteOptiond(props.optionText);
        }
      },
      "remove"
    )
  );
};
// class OPtion extends React.Component{
//   render(){
//     return (
//        <div>
//  { this.props.optionText}

//            </div>

//     )

//   }

// }

var Addoption = function (_React$Component2) {
  _inherits(Addoption, _React$Component2);

  function Addoption(props) {
    _classCallCheck(this, Addoption);

    var _this2 = _possibleConstructorReturn(this, (Addoption.__proto__ || Object.getPrototypeOf(Addoption)).call(this, props));

    _this2.handleonsubmit = _this2.handleonsubmit.bind(_this2);

    _this2.state = {
      error: undefined

    };
    return _this2;
  }

  _createClass(Addoption, [{
    key: "handleonsubmit",
    value: function handleonsubmit(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();

      var error = this.props.handleonsubmit(option);
      this.setState(function () {
        return { error: error };
      });

      if (!error) {

        e.target.elements.option.value = "";
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleonsubmit },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement("input", { type: "submit" })
        )
      );
    }
  }]);

  return Addoption;
}(React.Component);

ReactDOM.render(React.createElement(IndecsionApp, { options: [] }), document.getElementById("app"));
