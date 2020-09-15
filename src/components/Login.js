import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        this.register_handle(this.state);
        // 상태 초기화
        this.setState({
            id: '',
            pw: ''
        })
    }
    register_handle = (mem_info) => {
        console.log(mem_info);
        fetch('http://localhost:3001/account/signup', {	// fetch를 통해 Ajax통신을 한다.
          method: 'post',	// 방식은 post
          headers: {
            "Content-Type": "application/json; charset=utf-8"	// 헤더에서 본문 타입 설정
          },
          body: JSON.stringify(mem_info)	// body에 json 데이터를 전송할 때에는 문자열로 변경해서 보내야한다.
        })
          .then(res => res.json())
          .then(obj => {	// obj에는 서버사이드에서 전송해준 DB등록 성공여부가 담겨있다.
            if (obj.result === 'succ') {
              alert("회원가입이 완료되었습니다.");
              this.props.handleController('main');	// 내가 정의한 메소드다. 원하는 페이지로 이동시킨다.
            }
          });
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
                        <Link to="/signup" style={{ textDecoration: 'none' }}><button>회원가입</button></Link>
                        </td>
                    </table>
                </form>
            </div>

        );
    }
}
export default Login;