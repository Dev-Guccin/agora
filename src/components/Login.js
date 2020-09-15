import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import '../CSS/login.css';

class Login extends Component {
    state = {
        id: '',
        pw: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        // 페이지 리로딩 방지
        e.preventDefault();
        // 상태값을 onCreate 를 통하여 부모에게 전달
        this.props.onCreate(this.state);
        // 상태 초기화
        this.setState({
            id: '',
            pw: ''
        })
    }

    render() {
        return (
            <div className="login-outline">
                <form onSubmit={this.handleSubmit}>
                    <h2> Agora Login </h2>
                    <input
                        placeholder="ID"
                        value={this.state.id}
                        onChange={this.handleChange}
                        name="id"
                    /><br />
                    <input
                        placeholder="pw"
                        value={this.state.pw}
                        onChange={this.handleChange}
                        name="pw"
                        type="password"
                    /><br />
                    <table>
                        <td>
                        <button type="submit">로그인</button>
                        </td>
                        <td>
                        <button><Link to="/signup">회원가입</Link></button>
                        </td>
                    </table>
                </form>
            </div>

        );
    }
}
export default Login;