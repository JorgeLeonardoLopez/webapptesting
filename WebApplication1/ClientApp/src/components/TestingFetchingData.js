import React, { Component } from 'react';

export class TestingFetchingData extends Component {
    static displayName = TestingFetchingData.name;
    constructor(props) {
        super(props)
        this.state = { someData: [], loading: true };
    }

    componentDidMount() {
        this.GetSomeData();
    }

    static rendersomeDataTable(someData) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                    </tr>
                </thead>
                <tbody>
                    {someData.map(forecast =>
                        <tr key={forecast.date}>
                            <td>{forecast.date}</td>
                            <td>{forecast.name}</td>
                            <td>{forecast.age}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : TestingFetchingData.rendersomeDataTable(this.state.someData);

        return (
            <div>
                <h1 id="tabelLabel" >Weather forecast</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async GetSomeData() {
        const response = await fetch('somedata');
        const data = await response.json();
        this.setState({ someData: data, loading: false });
    }
}