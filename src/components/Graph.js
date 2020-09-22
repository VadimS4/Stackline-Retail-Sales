import React from 'react';
import { connect } from 'react-redux';
import { AiOutlineDown } from 'react-icons/ai';
import '../styles/Graph.css';

class Graph extends React.Component {
    render() {

        // Map through the sales data in order to create the table.
        const tableData = this.props.data.sales ? (
            this.props.data.sales.map(sale => {
                return (
                    <tr>
                        <td>{sale.weekEnding}</td>
                        <td>{'$' + sale.retailSales}</td>
                        <td>{'$' + sale.wholesaleSales}</td>
                        <td>{sale.unitsSold}</td>
                        <td>{'$' + sale.retailerMargin}</td>
                    </tr>
                )
            }))
            : (
            <div></div>
        )
        return (
            <div className="graph">
                <table>
                    <thead>
                        <tr>
                            <th scope="col">
                                <div className="weekEnding">
                                    <div className="col-title">
                                        WEEK ENDING
                                        <AiOutlineDown />
                                    </div>
                                </div>
                            </th>
                            <th scope="col">
                                <div className="weekEnding">
                                    <div className="col-title">
                                        RETAIL SALES
                                        <AiOutlineDown />
                                    </div>
                                </div>
                            </th>
                            <th scope="col">
                                <div className="weekEnding">
                                    <div className="col-title">
                                        WHOLESALE SALES
                                        <AiOutlineDown />
                                    </div>
                                </div>
                            </th>
                            <th scope="col">
                                <div className="weekEnding">
                                    <div className="col-title">
                                        UNITS SOLD
                                        <AiOutlineDown />
                                    </div>
                                </div>
                            </th>
                            <th scope="col">
                                <div className="weekEnding">
                                    <div className="col-title">
                                        RETAILER MARGIN
                                        <AiOutlineDown />
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>{tableData}</tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state[0]
    }
}

export default connect(mapStateToProps)(Graph);