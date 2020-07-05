import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coco'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Webos: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pickea algo:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="uva">uva</option>
            <option value="ola">ola</option>
            <option value="diavlo">diavlo</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <form> 
      <input class="input-text" placeholder="Nombre" type="text"/>
      <input class="input-text" placeholder="Apellido"/>
      <input class="input-text" placeholder="Apellido 2"/>
      <input type="date">
      <input placeholder="Que tanto te afecto el desastre?"/>
      <input type="file" placeholder="Tu cv"> 
      o 
      <textarea placeholder="describe tus capacidades"></textarea>
      
    </form>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <FlavorForm />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
