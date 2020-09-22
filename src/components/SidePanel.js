import React from 'react';
import { connect } from 'react-redux';
import { AiOutlineHome } from 'react-icons/ai';
import { FaRegChartBar } from 'react-icons/fa'
import '../styles/SidePanel.css';

class SidePanel extends React.Component {

    render() {
        let data = this.props.data
        return (
            <div className="side-panel">
                <div className="sidePanel-photo">
                    <img
                        className="sidePanel-img"
                        alt="product"
                        src={data.image}
                    >
                    </img>
                </div>
                <div className="title">
                    <span>{data.title}</span>
                </div>
                <div className="subtitle">
                    <span>{data.subtitle}</span>
                </div>
                <hr className="divider"></hr>
                <div className="tags">
                    {data.tags.map((tag, index) => {
                        return <button key={index} className="tag-button">{tag}</button>
                    })}
                </div>
                <hr className="divider"></hr>
                <div className="menu-buttons">
                    <div className="menu-item">
                        <AiOutlineHome />
                        <span className="menu-span">OVERVIEW</span>
                    </div>
                    <div className="menu-item">
                        <FaRegChartBar />
                        <span className="menu-span">SALES</span>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state[0]
    }
}

export default connect(mapStateToProps)(SidePanel);