import React, {Component} from 'react';
import "./Recommend.css";
import DefaultHeader from "../../components/Topnav/DefaultHeader"
import RecommendForm from "../../components/RecommendForm/RecommendForm"
import FullMap from "../../components/FullMap/FullMap"
import UserHeader from "../../components/Topnav/UserHeader";


class Recommend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowUserHeader: false
        }}
        componentDidMount() {
            if (localStorage.getItem("UID")) {
                this.setState({
                    isShowUserHeader: true
                })
            }
        }
        showUserHeaderHandler = () => {
            const isShow = this.state.isShowUserHeader;
            this.setState({
                isShowUserHeader: !isShow
            });  
        }
    render() {
        return (
            <div className="recommend-Container">
                  {localStorage.getItem("UID")?<UserHeader
                   showUserHeaderHandler={this.showUserHeaderHandler} />:
                <DefaultHeader
                showUserHeaderHandler={this.showUserHeaderHandler} />}
                <FullMap />
                <RecommendForm/>
            </div>
        )
    }
}

export default Recommend;
