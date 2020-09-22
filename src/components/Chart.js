import React from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, XAxis, Tooltip} from 'recharts';
import '../styles/Chart.css';

class Chart extends React.Component {
    render() {
        return (
            <div className="chart">
                <span>Retail Sales</span>
                <LineChart width={1080} height={450} data={this.props.data.sales}>
                    <XAxis dataKey="weekEnding"/>
                    <Tooltip />
                    <Line type="monotone" dataKey="retailSales" stroke="#40a8ef" />
                    <Line type="monotone" dataKey="wholesaleSales" stroke="#3c4858" />
                </LineChart>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        data: state[0]
    }
}

export default connect(mapStateToProps)(Chart);