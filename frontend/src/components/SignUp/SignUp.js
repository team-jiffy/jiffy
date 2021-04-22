import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import fb_icon from '../../assets/images/fb_icon.svg';
import google_icon from '../../assets/images/google_icon.svg';
import twitter_icon from '../../assets/images/twitter_icon.svg';
import './SignUp.css';
import axios from 'axios';
import ColumnGroup from 'antd/lib/table/ColumnGroup';
// import { Route, Switch } from 'react-router-dom';
import UserHeader from '../../components/Topnav/UserHeader';
// import { useHistory } from 'react-router-dom';

class SignUpForm extends React.Component {

//     componentDidMount(){
//         const user = {
//             "Email": "123@gmail.com",
//             "LastName": "aaaa",
//             "FirstName": "bbbb",
//             "Password": "123"
//           }
//         axios.put('http://localhost:8081/signup', user)
//             .then(res => {
//                 if (this._isMounted) {
//                     this.setState(res.data, () => {
//                         if (this.state.isSuccess) {
//                             alert("request has been submitted");
//                             this.props.history.push("/thanksForOrdering");
//                         }
//                     })
//                 }
//             })
//             .catch(error => {
//                 console.error(error);
//             });
// }
    // }




    constructor(props) {
        super(props);
        this.state = {
            Email: "",
            FirstName: "",
            LastName: "", 
            Password: "",
            status: null
        }

    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.form.validateFields( (err, values) => {   
                if (!err && values.agreement) {   
                //   console.log(values);
                  axios({
                        method: 'post',   
                        url: 'http://localhost:8081/signup', 
                        data: values,
                    }).then(
                        response => {
                            console.log('registration reponse -> ', response);
                            // console.log('response.data', response.data);

                            if (response.data.status === "200" || response.data.message === "success") {
                                alert("request has been submitted successfully!");
                                // TODO: Switch to UserHeader Component
                                    console.log("props: ", this.props)
                                    this.props.setModal2Visible();
                                
                            } 
                        }
                    ).catch(
                        error => {
                            console.log('registration error ->  ', error);
                        }
                    )

                }
        })      
    }

    
    render() {
        const { getFieldDecorator } = this.props.form;

        return (              
            <Form className="signUp" onSubmit={this.handleSubmit}>                    
                <Form.Item>
                    <span className="signUp-title">Sign up your account</span>
                </Form.Item>
                <Form.Item> 
                    {getFieldDecorator('Email', {
                        rules: [{ required: true, message: 'Please input your email!' }],
                    })(
                        <Input
                            type="email"
                            style={{background:'#F5F5F5'}}
                            placeholder="Enter email"
                        />,
                    )}
                </Form.Item>
                <Form.Item> 
                    {getFieldDecorator('FirstName', {
                        rules: [{ required: true, message: 'Please input your firstname!' }],
                    })(
                        <Input
                            type="firstname"
                            style={{background:'#F5F5F5'}}
                            placeholder="Enter firstname"
                        />,
                    )}
                </Form.Item>
                <Form.Item> 
                    {getFieldDecorator('LastName', {
                        rules: [{ required: true, message: 'Please input your lastname!' }],
                    })(
                        <Input
                            type="lastname"
                            style={{background:'#F5F5F5'}}
                            placeholder="Enter lastname"
                        />,
                    )}
                </Form.Item>
                <Form.Item> 
                    {getFieldDecorator('Password', {
                        rules: [{ required: true, message: 'Please input your password!' }],
                    })(
                        <Input
                            type="password"
                            style={{background:'#F5F5F5'}}
                            placeholder="Enter password"
                        />,
                    )}
                </Form.Item>
                <Form.Item> 
                    {getFieldDecorator('agreement', {
                        valuePropName: 'checked',
                        initialValue: false,
                        rules: [{ required: true, message: 'Please check the policy!' }],
                    })(<Checkbox className="check-box">I accept Jiffy <a href="">terms of service</a> and acknowledge the Privacy Policy.</Checkbox>)}
                </Form.Item>
                <Form.Item> 
                    <Button htmlType="submit" className="singUp-button">Sign up</Button>
                </Form.Item>     
                <Form.Item className="signUp-icon"> 
                    <span className="signUp-icon-text">Or you can sign in with</span>
                    <div>
                        <img src={ google_icon } className="gg-logo" />
                        <img src={ fb_icon } className="fb-logo" /> 
                        <img src={ twitter_icon } className="tw-logo" />
                    </div>
                    <span className="signUp-icon-ask">Already have an account? <a href="">Sign in</a></span>
                </Form.Item>
            </Form>
        )
    }
}

const SignUp = Form.create()(SignUpForm);

export default SignUp;