import { h, Component } from 'preact';

export default class App extends Component {
    render() {
        let time = new Date().toLocaleTimeString();
        return <div>
          <span>{ time }</span>
          <br />
          <span id='helloWorld'>'hello world'</span>
        </div>;
    }
}