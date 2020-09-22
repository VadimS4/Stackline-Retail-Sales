import React from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer} from 'recharts';
import '../styles/Chart.css';

class Chart extends React.Component {
    render() {
        return (
            <div className="chart">
                <span className="chart-title">Retail Sales</span>
                <ResponsiveContainer width="100%" height="50%" className="resp-container">
                    <LineChart data={this.props.data.sales}>
                        <XAxis dataKey="weekEnding"/>
                        <Tooltip />
                        <Line type="monotone" dataKey="retailSales" stroke="#40a8ef" strokeWidth={2} />
                        <Line type="monotone" dataKey="wholesaleSales" stroke="#3c4858" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
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