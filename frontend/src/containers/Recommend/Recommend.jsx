import React, {Component} from 'react';
import "./Recommend.css";
import DefaultHeader from "../../components/Topnav/DefaultHeader"
import RecommendForm from "../../components/RecommendForm/RecommendForm"

class Recommend extends Component {
    render() {
        return (
            <div className="recommendContainer">
                <DefaultHeader />
                <RecommendForm />
            </div>
        )
    }
}

export default Recommend;
