import React, {useState} from 'react';
/*
export default class Contador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conteo: 0,
        };
    }

    incrementar = () => {
        this.setState((prevState) => ({ conteo: prevState.conteo + 1}));
    };
    
    reducir = () => {
        this.setState((prevState) => ({ conteo: prevState.conteo - 1}));
    };

    render() {
        const {conteo} = this.state;

        return (
            <div>
                <h1>Contador de clicks</h1>
                <p>Conteo: {conteo}</p>
                <button onClick={this.incrementar}>Incrementar</button>
                <button onClick={this.reducir}>Reducir</button>
            </div>
        );
    }
}
*/
const Contador = () => {
    const [conteo, setConteo] = useState(0);
    
    const incrementar = () => {
        setConteo((prevConteo) => prevConteo + 1);
    };
    
    const reducir = () => {
        setConteo((prevConteo) => prevConteo - 1);
    };

    return (
        <div>
            <h1>Contador de clicks</h1>
            <p>Conteo: {conteo}</p>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={reducir}>Reducir</button>
        </div>
    );
}

export default Contador;