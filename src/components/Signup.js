import React from 'react';
import '../CSS/signup.css';


class Signup extends React.Component {
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
  handleSubmit = (e) => {
    e.preventDefault();

    this.register_handle({
      username: e.target.username.value,
      password: e.target.password.value,
      name: e.target.name.value,
      gender: e.target.gender.value,
      grade: e.target.grade.value,
      college: e.target.college.value,
      major: e.target.major.value,
      double_major: e.target.double_major.value,
      sub_major: e.target.sub_major.value,
      dormitory: e.target.dormitory.value,
      email: null
    });
  }

  render() {
    return (
      <div className="signup-outline">
        <h1> Sign up!</h1>
        <form onSubmit={this.handleSubmit}>
          <table boder="">
            <tr>
              <td text-align="center">아이디 </td>
              <td><input type="text" name="username" /> <input type="button" value="중복확인" />
              </td>
            </tr>
            <tr>
              <td> 패스워드 </td>
              <td><input type="password" name="password" /></td>
            </tr>
            <tr>
              <td> 패스워드 확인 </td>
              <td> <input type="password" name="re_password" />&nbsp;*패스워드를 다시 입력해주세요</td>
            </tr>
            <tr>
              <td> 이름 </td>
              <td> <input type="text" name="name" /> </td>
            </tr>
            <tr>
              <td> 성별 </td>
              <td>
                <input type="radio" name="gender" checked /> 남자
					      <input type="radio" name="gender" /> 여자
				      </td>
            </tr>
            <tr>
            </tr>
            <tr>
              <td> 학년 </td>
              <td>
                <select name="grade">
                  <option> 1학년 </option>
                  <option> 2학년 </option>
                  <option> 3학년 </option>
                  <option> 4학년 </option>
                </select>
              </td>
            </tr>
            <tr>
              <td> 단대 </td>
              <td>
                <select name="college">
                  <option> 가천리버럴아츠칼리지 </option>
                  <option> 경영대학 </option>
                  <option> 사회과학대학 </option>
                  <option> 인문대학 </option>
                  <option> 법과대학 </option>
                  <option> 공과대학 </option>
                  <option> 바이오나노대학 </option>
                  <option> IT융합대학 </option>
                </select>
              </td>
            </tr>
            <tr>
              <td> 학과 </td>
              <td><input type="text" name="major" /></td>
            </tr>
            <tr>
              <td> (선택)복수전공 </td>
              <td><input type="text" name="double_major" /></td>
            </tr>
            <tr>
              <td> (선택)부전공 </td>
              <td><input type="text" name="sub_major" /></td>
            </tr>
            <tr>
              <td> (선택)기숙여부 </td>
              <td><input type="radio" name="dormitory" checked /> 유
					      <input type="radio" name="dormitory" /> 무</td>
            </tr>
            <br />
            <tr>
                <td>
                <button type="submit" >가입하기</button>
                </td>
                <td>
                <button type="reset">다시입력</button>
                </td>
            </tr>
          </table>
          <table>
            <td>
            </td>
            <td>
            </td>
            </table>
        </form>
      </div>
    )
  }
}

export default Signup;