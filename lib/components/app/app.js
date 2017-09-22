'use strict';

exports.__esModule = true;

var _preact = require('preact');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    App.prototype.render = function render() {
        var time = new Date().toLocaleTimeString();
        return (0, _preact.h)(
            'div',
            null,
            (0, _preact.h)(
                'span',
                null,
                time
            ),
            (0, _preact.h)('br', null),
            (0, _preact.h)(
                'span',
                { id: 'helloWorld' },
                '\'hello world\''
            )
        );
    };

    return App;
}(_preact.Component);

exports.default = App;