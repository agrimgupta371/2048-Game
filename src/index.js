import React from 'react';
import ReactDOM from 'react-dom';
import BoardView from './components/Board';
import './main.scss';
import './styles.scss';


const App = () => {
    return <h1><BoardView /></h1>;
}

ReactDOM.render(<App />, document.getElementById('root'));