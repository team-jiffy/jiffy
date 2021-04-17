import React, {Component} from 'react';
import "./Recommend.css";
import DefaultHeader from "../../components/Topnav/DefaultHeader"
import RecommendForm from "../../components/RecommendForm/RecommendForm"
import FullMap from "../../components/FullMap/FullMap"

class Recommend extends Component {
    render() {
        return (
            <div className="recommend-Container">
                <DefaultHeader />
                <FullMap />
                <RecommendForm />
            </div>
        )
    }
}

export default Recommend;
