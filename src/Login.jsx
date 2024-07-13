import React, {useState, useEffect} from "react";

const User = {
  email: "test@email.com",
  pw: "qwe123123!"
}

export default function Login() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [PwValid, setPwValid] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    regex.test(e.target.value) ? setEmailValid(true) : setEmailValid(false);
  }

  const handlePw = (e) => {
    setPw(e.target.value);
    const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    regex.test(e.target.value) ? setPwValid(true) : setPwValid(false);
  }

  const [notAllow, setNotAllow] = useState(true);

  const ConfirmBtn = () => {
    email === User.email && pw === User.pw ? alert("로그인에 성공했습니다.") : alert("등록되지 않은 회원입니다.");
  }

  useEffect(() => {
    emailValid && PwValid ? setNotAllow(false) : setNotAllow(true);
  }, [emailValid, PwValid]);

  return (
    <div className="page">
      <div className="titleWrap">
        이메일과 비밀번호를
        <br />
        입력해주세요.
      </div>

      <div className="contentWrap">
        <div className="inputTitle">이메일 주소</div>
        <div className="inputWrap">
          <input type="email" value={email} onChange={handleEmail} className="input" placeholder="example@email.com"/>
        </div>
        <div className="errorMessageWrap">
          {/* 
          이메일의 길이가 0일 때(아무런 입력 값을 넣지 않았을 때) 에러 메세지가 안나타남
          입력 값을 넣으면 에러 메세지가 나타나는 데, 정규표현식에 맞춰 작성을 했다면 에러 메세지 없어짐
           */}
          {!emailValid && email.length > 0 && (
            <div>올바른 이메일을 입력해주세요.</div>
          )}
        </div>

        <div className="inputTitle" style={{marginTop:"26px"}}>비밀번호</div>
        <div className="inputWrap">
          <input type="password" value={pw} onChange={handlePw} className="input" placeholder="영문, 숫자, 특수문자 포함 8자 이상"/>
        </div>
        <div className="errorMessageWrap">
          {!PwValid && pw.length > 0 && (
            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
          )}
        </div>

      </div>
      <div>
        <button onClick={ConfirmBtn} disabled={notAllow} className="bottomBtn">확인</button>
      </div>
    </div>
  )
};