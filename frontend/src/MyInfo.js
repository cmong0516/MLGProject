import React, {useState} from "react";
import { Button,Form } from "react-bootstrap";
import styled from 'styled-components';

let InfoForm = styled.div`
    width: 22rem;
    margin: auto;
    padding-bottom: 3rem;
    text-align: left;

    input, button {
        width: 100%;
        height: 3rem;
        // margin-bottom: 1rem;
    }
    button {
        margin-top: 1rem;
    }
`
let GroupStyle = styled.div`
    margin: 1rem 0;
`
let Alarm = styled.div`
    width: 100%;
    text-align: left;
    color: red;
    font-weight: bold;   
`

function Editprofile() {

  let [validated, setValidated] = useState(false);
  let [pwAlarm, setPwAlarm] = useState('');
  let [pwMatchAlarm, setPwMatchAlarm] = useState('');
  let [account, setAccount] = useState({
      useremail: '',
      userpw: '',
      userpwCheck: ''
  })

  // 아이디 : 영어/숫자 6-12자
  let idFormat = RegExp(/^[A-Za-z0-9]{6,12}$/);
  // 비밀번호 : 영어/숫자/특수문자(각 최소 1개씩) 조합 9-20자
  let passwordFormat = RegExp(/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[~`!@#$%\^&*()-+=])[A-Za-z0-9~`!@#$%\^&*()-+=]{9,20}$/);

  let onChangeFunc = (e) => {
    setAccount({
        ...account, [e.target.name]: e.target.value
    })
  }

  let submitFunc = (e) => {
    e.preventDefault();
    let form = e.currentTarget;

    setPwAlarm('');
    setPwMatchAlarm('');

    if (form.checkValidity() === false) {
      e.preventDefault();
      setValidated(true);
    } else if(!passwordFormat.test(account.userpw) ) {
      setPwAlarm('비밀번호의 형식이 올바르지 않습니다.');
    } else if(account.userpw != account.userpwCheck) {
        setPwMatchAlarm('비밀번호가 일치하지 않습니다.');
    } else {
        alert('콘솔창 확인');
        console.log(account);
        // axios.post('')
        // .then((res) => null)
    }
  }

  return (
    <div>
      <p>개인정보 수정</p>
      <InfoForm>
        <Form noValidate validated={validated} onSubmit={submitFunc}>
          <GroupStyle>
            <Form.Group>
                <Form.Label>이메일</Form.Label>
                {/* <Alarm>{emailAlarm}</Alarm> */}
                <Form.Control
                    required
                    type="email"
                    name="email"
                    placeholder="ex) GoBook@naver.com"
                    onChange={onChangeFunc}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">이메일을 입력해주세요.</Form.Control.Feedback>
            </Form.Group>
          </GroupStyle>
          
          <GroupStyle>
            <Form.Group>
                <Form.Label>비밀번호</Form.Label>
                <Alarm>{pwAlarm}</Alarm>
                <Form.Control
                    required
                    type="password"
                    name="userpw"
                    placeholder="영어/숫자/특수문자 포함 9-20자를 입력해주세요."
                    onChange={onChangeFunc}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">비밀번호를 입력해주세요.</Form.Control.Feedback>
            </Form.Group>
          </GroupStyle>

          <GroupStyle>
            <Form.Group>
                <Form.Label>비밀번호 확인</Form.Label>
                <Alarm>{pwMatchAlarm}</Alarm>
                <Form.Control
                    required
                    type="password"
                    name="userpwCheck"
                    placeholder="확인을 위해 비밀번호를 한번 더 입력해주세요."
                    onChange={onChangeFunc}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">비밀번호 확인을 입력해주세요.</Form.Control.Feedback>
            </Form.Group>
          </GroupStyle>

          <Button variant="primary" type="submit">
              수정하기
          </Button>
        </Form>
      </InfoForm>
    </div>
  );
}

export default Editprofile;
