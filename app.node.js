module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(20);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fbjsLibExecutionEnvironment = __webpack_require__(4);

  var _libLocation = __webpack_require__(3);

  var _libLocation2 = _interopRequireDefault(_libLocation);

  var _componentsLayout = __webpack_require__(5);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(9);
    }, '/500': function _() {
      return __webpack_require__(10);
    }, '/about': function about() {
      return __webpack_require__(11);
    }, '/': function _() {
      return __webpack_require__(12);
    } }; // Auto-generated on build. See tools/lib/routes-loader.js

  var route = function route(path, callback) {
    var handler, component;
    return regeneratorRuntime.async(function route$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          handler = routes[path] || routes['/404'];
          context$1$0.next = 3;
          return regeneratorRuntime.awrap(handler());

        case 3:
          component = context$1$0.sent;
          context$1$0.next = 6;
          return regeneratorRuntime.awrap(callback(_react2['default'].createElement(
            _componentsLayout2['default'],
            null,
            _react2['default'].createElement(component)
          )));

        case 6:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this);
  };

  function run() {
    var _this2 = this;

    var container = document.getElementById('app');
    _libLocation2['default'].listen(function (location) {
      route(location.pathname, function callee$2$0(component) {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              return context$3$0.abrupt('return', _reactDom2['default'].render(component, container));

            case 1:
            case 'end':
              return context$3$0.stop();
          }
        }, null, _this2);
      });
    });
  }

  if (_fbjsLibExecutionEnvironment.canUseDOM) {
    // Run the application when both DOM is ready
    // and page content is loaded
    if (window.addEventListener) {
      window.addEventListener('DOMContentLoaded', run);
    } else {
      window.attachEvent('onload', run);
    }
  }

  exports['default'] = { route: route, routes: routes };
  module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];

  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};

  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibExecutionEnvironment = __webpack_require__(4);

  var _historyLibCreateBrowserHistory = __webpack_require__(18);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibUseQueries = __webpack_require__(19);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = _fbjsLibExecutionEnvironment.canUseDOM ? (0, _historyLibUseQueries2['default'])(_historyLibCreateBrowserHistory2['default'])() : {};

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(13);

  var _Navigation = __webpack_require__(7);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  var Layout = (function (_Component) {
    _inherits(Layout, _Component);

    function Layout() {
      _classCallCheck(this, Layout);

      _get(Object.getPrototypeOf(Layout.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Layout, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Layout' },
          _react2['default'].createElement(_Navigation2['default'], null),
          this.props.children
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        children: _react.PropTypes.element.isRequired
      },
      enumerable: true
    }]);

    return Layout;
  })(_react.Component);

  exports['default'] = Layout;
  module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(14);

  var _libLocation = __webpack_require__(3);

  var _libLocation2 = _interopRequireDefault(_libLocation);

  function isLeftClickEvent(event) {
    return event.button === 0;
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }

  var Link = (function (_Component) {
    _inherits(Link, _Component);

    function Link() {
      _classCallCheck(this, Link);

      _get(Object.getPrototypeOf(Link.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var children = _props.children;

        var props = _objectWithoutProperties(_props, ['to', 'children']);

        return _react2['default'].createElement(
          'a',
          _extends({ onClick: Link.handleClick.bind(this) }, props),
          children
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        to: _react.PropTypes.string.isRequired,
        children: _react.PropTypes.element.isRequired,
        state: _react.PropTypes.object,
        onClick: _react.PropTypes.func
      },
      enumerable: true
    }, {
      key: 'handleClick',
      value: function value(event) {
        var allowTransition = true;
        var clickResult = undefined;

        if (_this.props && _this.props.onClick) {
          clickResult = _this.props.onClick(event);
        }

        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }

        if (clickResult === false || event.defaultPrevented === true) {
          allowTransition = false;
        }

        event.preventDefault();

        if (allowTransition) {
          var link = event.currentTarget;
          _libLocation2['default'].pushState(_this.props && _this.props.state || null, _this.props && _this.props.to || link.pathname + link.search);
        }
      },
      enumerable: true
    }]);

    return Link;
  })(_react.Component);

  exports['default'] = Link;
  module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(15);

  var _Link = __webpack_require__(6);

  var _Link2 = _interopRequireDefault(_Link);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'ul',
          { className: 'Navigation', role: 'menu' },
          _react2['default'].createElement(
            'li',
            { className: 'Navigation-item' },
            _react2['default'].createElement(
              'a',
              { className: 'Navigation-link', href: '/', onClick: _Link2['default'].handleClick },
              'Home'
            )
          ),
          _react2['default'].createElement(
            'li',
            { className: 'Navigation-item' },
            _react2['default'].createElement(
              'a',
              { className: 'Navigation-link', href: '/about', onClick: _Link2['default'].handleClick },
              'About'
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(16);

  var UserCard = (function (_Component) {
    _inherits(UserCard, _Component);

    function UserCard() {
      _classCallCheck(this, UserCard);

      _get(Object.getPrototypeOf(UserCard.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(UserCard, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.setState({ avatarNotFound: false });
      }
    }, {
      key: 'onAvatarError',
      value: function onAvatarError() {
        this.setState({ avatarNotFound: true });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this = this;

        var user = this.props.user;
        var avatarNotFound = this.state.avatarNotFound;

        var avatar = (function () {
          if (user.avatar && !avatarNotFound) {
            return _react2['default'].createElement('img', { className: 'photo', src: user.avatar, onError: _this.onAvatarError.bind(_this) });
          } else {
            var initial = user.name[0];
            return _react2['default'].createElement(
              'div',
              { className: 'avatar' },
              initial
            );
          }
        })();

        var impressionsTotal = 12345;
        var conversionsTotal = 1234;
        var revenueTotal = 1234.56;

        return _react2['default'].createElement(
          'div',
          { className: 'UserCard' },
          _react2['default'].createElement(
            'div',
            { className: 'vcard' },
            avatar,
            _react2['default'].createElement(
              'div',
              { className: 'signature' },
              _react2['default'].createElement(
                'h4',
                { className: 'fn' },
                user.name
              ),
              _react2['default'].createElement(
                'h6',
                { className: 'title' },
                user.occupation
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'stats' },
            _react2['default'].createElement(
              'div',
              { className: 'impressions-total total' },
              impressionsTotal
            ),
            _react2['default'].createElement(
              'div',
              { className: 'impressions-label' },
              'impressions'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'conversions-total total' },
              conversionsTotal
            ),
            _react2['default'].createElement(
              'div',
              { className: 'conversions-label' },
              'conversions'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'revenue-total total' },
              '$',
              revenueTotal
            )
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        user: _react.PropTypes.object.isRequired
      },
      enumerable: true
    }]);

    return UserCard;
  })(_react.Component);

  exports['default'] = UserCard;
  module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Not Found'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'The page you\'re looking for was not found.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Error'
          ),
          _react2['default'].createElement(
            'pre',
            null,
            this.props.error ? this.props.error.message + '\n\n' + this.props.error.stack : 'A critical error occurred.'
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        error: _react.PropTypes.instanceOf(Error)
      },
      enumerable: true
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'About Us'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsUserCard = __webpack_require__(8);

  var _componentsUserCard2 = _interopRequireDefault(_componentsUserCard);

  var _staticDataUsersJson = __webpack_require__(17);

  var _staticDataUsersJson2 = _interopRequireDefault(_staticDataUsersJson);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.setState({
          users: _staticDataUsersJson2['default']
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var users = this.state.users;

        return _react2['default'].createElement(
          'ul',
          null,
          users.map(function (user) {
            return _react2['default'].createElement(
              'li',
              { key: user.id, className: 'card' },
              _react2['default'].createElement(_componentsUserCard2['default'], { user: user })
            );
          })
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  background-color: rgb(127, 140, 141);\n  color: #333;\n  font-family: 'Roboto','Helvetica',sans-serif;\n}\n\nul {\n  padding-left: 0;\n}\n\nli {\n  list-style: none;\n}\n\n.Layout {\n  margin: 0 25px;\n}\n\nli.card {\n  display: inline-block;\n  margin: 10px;\n}\n\n@media (min-width: 768px) {\n  .Layout {\n    width: calc(768px - 18px);\n  }\n}\n\n@media (min-width: 992px) {\n  .Layout {\n    width: calc(992px - 22px);\n  }\n}\n\n@media (min-width: 1200px) {\n  .Layout {\n    width: calc(1200px - 30px);\n  }\n}\n", ""]);

  // exports


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\r\n * React Static Boilerplate\r\n * https://github.com/koistya/react-static-boilerplate\r\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\r\n */\r\n\r\n.Link {\r\n\r\n}\r\n", ""]);

  // exports


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\r\n * React Static Boilerplate\r\n * https://github.com/koistya/react-static-boilerplate\r\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\r\n */\r\n\r\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\r\n\r\n.Navigation {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: row;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  margin: 2em 0 5em 0;\r\n  list-style: none;\r\n  -webkit-box-pack: end;\r\n  -webkit-justify-content: flex-end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n}\r\n\r\n.Navigation-item {\r\n  padding: 0 2em;\r\n}\r\n\r\n.Navigation-link {\r\n  padding: 0.5em 1em;\r\n  color: #333;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n}\r\n\r\n.Navigation-link:hover {\r\n  border-bottom: 3px solid #333;\r\n  color: #333;\r\n}\r\n", ""]);

  // exports


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, ".UserCard {\n  position: relative;\n  height: 160px;\n  width: 300px;\n  padding: 10px;\n  background-color: #fff;\n  border: 4px solid #000;\n  border-radius: 10px;\n}\n.UserCard .photo, .UserCard .avatar {\n  position: absolute;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: 80px;\n  width: 80px;\n  border-radius: 50%;\n}\n.UserCard .avatar {\n  font-weight: bold;\n  font-size: 2.5em;\n  color: #fff;\n  padding-top: 15px;\n  padding-left: 27px;\n  background-color: rgb(58, 153, 216);\n}\n.UserCard .signature {\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin-left: 100px;\n}\n.UserCard .signature h4, .UserCard .signature h6 {\n  margin: 0;\n}\n.UserCard .signature h4 {\n  margin-top: 15px;\n  font-size: 1.5em;\n  font-weight: bold;\n}\n.UserCard .signature h6 {\n  margin-left: 10px;\n  font-size: 0.9em;\n  color: rgb(149, 165, 166);\n}\n.UserCard .stats {\n  position: absolute;\n  bottom: 15px;\n  right: 20px;\n  text-align: right;\n  color: rgb(189, 195, 199);\n  font-size: 0.9em;\n}\n.UserCard .stats .total {\n  margin-top: 5px;\n  font-weight: bold;\n  font-size: 1.1em;\n}\n.UserCard .stats .impressions-total {\n  color: rgb(228, 126, 48);\n}\n.UserCard .stats .conversions-total {\n  color: rgb(47, 129, 183);\n}\n.UserCard .stats .revenue-total {\n  color: rgb(48, 173, 99);\n}\n", ""]);

  // exports


/***/ },
/* 17 */
/***/ function(module, exports) {

  module.exports = [
  	{
  		"name": "Charlie S. Gerardi",
  		"avatar": "http://uifaces.com/faces/_twitter/jonsuh_120.jpg",
  		"id": 75,
  		"occupation": "Residential electrician"
  	},
  	{
  		"name": "Riley D. Norris",
  		"avatar": "",
  		"id": 23,
  		"occupation": "Transmission engineer"
  	},
  	{
  		"name": "Aaron E. Poynton",
  		"avatar": "http://uifaces.com/faces/phillip_120.jpg",
  		"id": 45,
  		"occupation": "Public address system announcer"
  	},
  	{
  		"name": "Henry A. Gilchrist",
  		"avatar": "http://uifaces.com/faces/_twitter/axelbouaziz_120.jpg",
  		"id": 60,
  		"occupation": "Professor"
  	},
  	{
  		"name": "Cody I. Tunbridge",
  		"avatar": "http://uifaces.com/faces/curtis_120.jpg",
  		"id": 27,
  		"occupation": "Product designer"
  	},
  	{
  		"name": "Wm A. Winslow",
  		"avatar": "http://uifaces.com/faces/_twitter/renbyrd_120.jpg",
  		"id": 19,
  		"occupation": "Contract cutter"
  	},
  	{
  		"name": "Charles S. Gardner",
  		"avatar": "http://uifaces.com/faces/_twitter/alek_djuric_120.jpg",
  		"id": 22,
  		"occupation": "Phlebotomist"
  	},
  	{
  		"name": "Lincoln H. Moss",
  		"avatar": "http://uifaces.com/faces/larry_120.jpg",
  		"id": 36,
  		"occupation": "Auto damage appraiser"
  	},
  	{
  		"name": "Sienna H. Alanson",
  		"avatar": "http://uifaces.com/faces/_twitter/luhman_120.jpg",
  		"id": 82,
  		"occupation": "Oral surgeon"
  	},
  	{
  		"name": "Richard J. Linden",
  		"avatar": "http://uifaces.com/faces/_twitter/cameronmoll_120.jpg",
  		"id": 80,
  		"occupation": "General internist"
  	},
  	{
  		"name": "Lynn C. Hastings",
  		"avatar": "http://uifaces.com/faces/_twitter/jsngr_120.jpg",
  		"id": 14,
  		"occupation": "Research psychologist"
  	},
  	{
  		"name": "Randy S. Nagel",
  		"avatar": "",
  		"id": 17,
  		"occupation": "Rail yard engineer"
  	},
  	{
  		"name": "Patrick K. Larson",
  		"avatar": "http://uifaces.com/faces/_twitter/designer_dean_120.jpg",
  		"id": 77,
  		"occupation": "Librarian"
  	},
  	{
  		"name": "Patrick A. Godfrey",
  		"avatar": "http://uifaces.com/faces/_twitter/CrafterSama_120.jpg",
  		"id": 69,
  		"occupation": "Museum technician"
  	},
  	{
  		"name": "Lara C. Gardiner",
  		"avatar": "http://uifaces.com/faces/_twitter/deimler_120.jpg",
  		"id": 6,
  		"occupation": "Phlebotomist"
  	},
  	{
  		"name": "Archie E. Vogel",
  		"avatar": "",
  		"id": 31,
  		"occupation": "U.S. marshal"
  	},
  	{
  		"name": "Sean K. McCarthy",
  		"avatar": "",
  		"id": 38,
  		"occupation": "Environmental meteorologist"
  	},
  	{
  		"name": "Harrison R. Hall",
  		"avatar": "http://uifaces.com/faces/_twitter/cibawoman_120.jpg",
  		"id": 32,
  		"occupation": "Technical recruiter"
  	},
  	{
  		"name": "Frank P. Fuller",
  		"avatar": "http://uifaces.com/faces/_twitter/kolage_120.jpg",
  		"id": 78,
  		"occupation": "Deckhand"
  	},
  	{
  		"name": "Sienna H. Hardey",
  		"avatar": "http://uifaces.com/faces/bob_120.jpg",
  		"id": 55,
  		"occupation": "Electronics technician"
  	},
  	{
  		"name": "Jasmine S. Logue",
  		"avatar": "",
  		"id": 46,
  		"occupation": "Plumbing inspector"
  	},
  	{
  		"name": "Zoraida L. Johnson",
  		"avatar": "",
  		"id": 39,
  		"occupation": "Guitar repairer"
  	},
  	{
  		"name": "Ruth C. Johnson",
  		"avatar": "http://uifaces.com/faces/sn_newman_120.jpg",
  		"id": 81,
  		"occupation": "Mariner"
  	},
  	{
  		"name": "Jessica D. Hales",
  		"avatar": "",
  		"id": 52,
  		"occupation": "Typesetting machine operator"
  	},
  	{
  		"name": "Lawrence C. Young",
  		"avatar": "http://uifaces.com/faces/_twitter/decarola_120.jpg",
  		"id": 18,
  		"occupation": "Construction and maintenance painter"
  	},
  	{
  		"name": "Hunter S. Niall",
  		"avatar": "http://uifaces.com/faces/_twitter/blakesimkins_120.jpg",
  		"id": 72,
  		"occupation": "Server"
  	},
  	{
  		"name": "Julia A. Robles",
  		"avatar": "",
  		"id": 79,
  		"occupation": "Prosthodontist"
  	},
  	{
  		"name": "Rosemary J. Ray",
  		"avatar": "",
  		"id": 59,
  		"occupation": "Funeral manager"
  	},
  	{
  		"name": "David S. Proctor",
  		"avatar": "",
  		"id": 61,
  		"occupation": "Dental ceramist"
  	},
  	{
  		"name": "Thomas A. McDuffie",
  		"avatar": "http://uifaces.com/faces/renee_120.jpg",
  		"id": 63,
  		"occupation": "Sewer"
  	},
  	{
  		"name": "John S. Sheppard",
  		"avatar": "",
  		"id": 56,
  		"occupation": "Delivery service truck driver"
  	},
  	{
  		"name": "Holly J. Briggs",
  		"avatar": "",
  		"id": 49,
  		"occupation": "Ophthalmic laboratory technician"
  	},
  	{
  		"name": "Rose M. Dickens",
  		"avatar": "http://uifaces.com/faces/_twitter/Fitehal_120.jpg",
  		"id": 11,
  		"occupation": "Hairdresser"
  	},
  	{
  		"name": "Martin N. Hardin",
  		"avatar": "http://uifaces.com/faces/_twitter/todd_coleman_120.jpg",
  		"id": 13,
  		"occupation": "Power plant distributor"
  	},
  	{
  		"name": "Hannah R. Bryan",
  		"avatar": "http://uifaces.com/faces/_twitter/jpadilla__120.jpg",
  		"id": 67,
  		"occupation": "Loan closer"
  	},
  	{
  		"name": "Nathan S. Myers",
  		"avatar": "http://uifaces.com/faces/gob_120.jpg",
  		"id": 73,
  		"occupation": "Chemical technician"
  	},
  	{
  		"name": "Matthew H. Glover",
  		"avatar": "http://uifaces.com/faces/_twitter/jwphillips_120.jpg",
  		"id": 29,
  		"occupation": "Transportation attendant"
  	},
  	{
  		"name": "Mia N. Brennan",
  		"avatar": "http://uifaces.com/faces/_twitter/neweravin_120.jpg",
  		"id": 54,
  		"occupation": "Health psychologist"
  	},
  	{
  		"name": "Michael P. Martin",
  		"avatar": "",
  		"id": 47,
  		"occupation": "Industrial engineering technician"
  	},
  	{
  		"name": "Freya M. Glover",
  		"avatar": "http://uifaces.com/faces/_twitter/Alvaro_Nistal_120.jpg",
  		"id": 34,
  		"occupation": "Maintenance electrician"
  	},
  	{
  		"name": "Jamie R. King",
  		"avatar": "http://uifaces.com/faces/palmer_120.jpg",
  		"id": 65,
  		"occupation": "Photoengraver"
  	},
  	{
  		"name": "Sienna J. Oberg",
  		"avatar": "http://uifaces.com/faces/gram_120.jpg",
  		"id": 8,
  		"occupation": "Deckhand"
  	},
  	{
  		"name": "Lara A. Muecke",
  		"avatar": "",
  		"id": 42,
  		"occupation": "Registered representative"
  	},
  	{
  		"name": "Claire H. Cumbrae",
  		"avatar": "http://uifaces.com/faces/_twitter/sajtoo_120.jpg",
  		"id": 71,
  		"occupation": "Banker investigator"
  	},
  	{
  		"name": "Kian E. Matthews",
  		"avatar": "",
  		"id": 7,
  		"occupation": "Earth driller"
  	},
  	{
  		"name": "Mohammad E. Singh",
  		"avatar": "http://uifaces.com/faces/_twitter/daryl_120.jpg",
  		"id": 5,
  		"occupation": "Auditing clerk"
  	},
  	{
  		"name": "Kieran Z. Davidson",
  		"avatar": "http://uifaces.com/faces/nina_120.jpg",
  		"id": 4,
  		"occupation": "Short-order cook"
  	},
  	{
  		"name": "Tracy W. Chin",
  		"avatar": "",
  		"id": 3,
  		"occupation": "Clerk"
  	},
  	{
  		"name": "Nicole M. Brooks",
  		"avatar": "http://uifaces.com/faces/_twitter/roybarberuk_120.jpg",
  		"id": 28,
  		"occupation": "Auto damage appraiser"
  	},
  	{
  		"name": "Ronald M. Stone",
  		"avatar": "http://uifaces.com/faces/_twitter/calvintennant_120.jpg",
  		"id": 50,
  		"occupation": "Motel desk clerk"
  	},
  	{
  		"name": "Arline T. Williams",
  		"avatar": "http://uifaces.com/faces/_twitter/vctrfrnndz_120.jpg",
  		"id": 21,
  		"occupation": "Design printing machine operator"
  	},
  	{
  		"name": "Harry S. Burston",
  		"avatar": "http://uifaces.com/faces/_twitter/feliperibeiros_120.jpg",
  		"id": 62,
  		"occupation": "Social and community service manager"
  	},
  	{
  		"name": "Sofia S. Parkin",
  		"avatar": "",
  		"id": 1,
  		"occupation": "Terrazzo worker"
  	},
  	{
  		"name": "Owen E. Nolan",
  		"avatar": "",
  		"id": 9,
  		"occupation": "Guitar repairer"
  	},
  	{
  		"name": "Alana L. Follett",
  		"avatar": "http://uifaces.com/faces/lucille_120.jpg",
  		"id": 12,
  		"occupation": "Special education teacher"
  	},
  	{
  		"name": "Desmond J. Carnes",
  		"avatar": "",
  		"id": 24,
  		"occupation": "Yoga instructor"
  	},
  	{
  		"name": "Leo Y. Alexander",
  		"avatar": "",
  		"id": 70,
  		"occupation": "Stock clerk"
  	},
  	{
  		"name": "Ashley R. Johnson",
  		"avatar": "http://uifaces.com/faces/olivia_120.jpg",
  		"id": 35,
  		"occupation": "Transportation attendant"
  	},
  	{
  		"name": "Georgina H. Gibbons",
  		"avatar": "",
  		"id": 53,
  		"occupation": "Adult secondary education teacher"
  	},
  	{
  		"name": "Daniel J. Scott",
  		"avatar": "",
  		"id": 48,
  		"occupation": "Maxillofacial radiologist"
  	},
  	{
  		"name": "Hayden M. Walstab",
  		"avatar": "http://uifaces.com/faces/_twitter/garrettgee_120.jpg",
  		"id": 26,
  		"occupation": "Web designer"
  	},
  	{
  		"name": "Zac A. Massie",
  		"avatar": "http://uifaces.com/faces/george_120.jpg",
  		"id": 33,
  		"occupation": "Commercial pilot"
  	},
  	{
  		"name": "Darcy A. Farr",
  		"avatar": "http://uifaces.com/faces/_twitter/temonehm_120.jpg",
  		"id": 41,
  		"occupation": "Child care worker"
  	},
  	{
  		"name": "Joseph C. Knorr",
  		"avatar": "",
  		"id": 37,
  		"occupation": "Social science research assistant"
  	},
  	{
  		"name": "Samuel J. Hartley",
  		"avatar": "",
  		"id": 66,
  		"occupation": "Industrial engineering technician"
  	},
  	{
  		"name": "Kiara C. Bunce",
  		"avatar": "",
  		"id": 15,
  		"occupation": "Control room trainee"
  	},
  	{
  		"name": "Scarlett J. Sinclair",
  		"avatar": "http://uifaces.com/faces/_twitter/VinThomas_120.jpg",
  		"id": 43,
  		"occupation": "News photographer"
  	},
  	{
  		"name": "Richard L. Baughman",
  		"avatar": "http://uifaces.com/faces/_twitter/jayrobinson_120.jpg",
  		"id": 83,
  		"occupation": "Crop scientist"
  	},
  	{
  		"name": "Leah E. Marr",
  		"avatar": "http://uifaces.com/faces/wayne_120.jpg",
  		"id": 76,
  		"occupation": "Addictions nurse"
  	},
  	{
  		"name": "Ernest M. Jackson",
  		"avatar": "http://uifaces.com/faces/_twitter/itolmach_120.jpg",
  		"id": 64,
  		"occupation": "Technical sales support worker"
  	},
  	{
  		"name": "John C. Ashby",
  		"avatar": "http://uifaces.com/faces/_twitter/ckor_120.jpg",
  		"id": 20,
  		"occupation": "Computer chip processor"
  	},
  	{
  		"name": "Thomas I. Rolland",
  		"avatar": "http://uifaces.com/faces/sn_elane_120.jpg",
  		"id": 25,
  		"occupation": "Farmhand"
  	},
  	{
  		"name": "Claire C. O'Donnell",
  		"avatar": "http://uifaces.com/faces/_twitter/Djeje_120.jpg",
  		"id": 58,
  		"occupation": "Woodworking machine tender"
  	},
  	{
  		"name": "Nicholas M. Vogel",
  		"avatar": "http://uifaces.com/faces/_twitter/matejsudar_120.jpg",
  		"id": 40,
  		"occupation": "Electromechanical equipment assembler"
  	},
  	{
  		"name": "Jason P. Varela",
  		"avatar": "http://uifaces.com/faces/_twitter/ThisIsJohnBrown_120.jpg",
  		"id": 2,
  		"occupation": "Ticket seller"
  	},
  	{
  		"name": "Bailey G. Brazenor",
  		"avatar": "",
  		"id": 44,
  		"occupation": "Oxy-gas cutter"
  	},
  	{
  		"name": "George J. Weigel",
  		"avatar": "http://uifaces.com/faces/_twitter/ariona_rian_120.jpg",
  		"id": 16,
  		"occupation": "Museum director"
  	},
  	{
  		"name": "Lucy B. Fulks",
  		"avatar": "",
  		"id": 30,
  		"occupation": "Personnel administrator"
  	},
  	{
  		"name": "Rebecca X. Lesina",
  		"avatar": "",
  		"id": 51,
  		"occupation": "Hairstylist"
  	},
  	{
  		"name": "Leah L. McDonagh",
  		"avatar": "http://uifaces.com/faces/_twitter/benefritz_120.jpg",
  		"id": 10,
  		"occupation": "Land acquisition specialist"
  	},
  	{
  		"name": "Owen A. Walker",
  		"avatar": "http://uifaces.com/faces/_twitter/antoniopratas_120.jpg",
  		"id": 57,
  		"occupation": "Grocery bagger"
  	},
  	{
  		"name": "Amber J. Kent",
  		"avatar": "",
  		"id": 68,
  		"occupation": "Bartender helper"
  	},
  	{
  		"name": "Donna R. Maze",
  		"avatar": "",
  		"id": 74,
  		"occupation": "Operating engineer"
  	}
  ];

/***/ },
/* 18 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 19 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 20 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ }
/******/ ]);