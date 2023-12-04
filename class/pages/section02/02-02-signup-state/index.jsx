import { useState } from "react"

export default function SignupStatePage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function onChangeEmail(event) {
        console.log(event) // 나의 행동
        console.log(event.target) // 작동된 태그
        console.log(event.target.value) // 작동한 태그에 입력된 값.
    }

    function onChangePassword(event) {

    }

    function onClickSignup(event) {

        // 1. 검증 하기
        if(email.includes("@") === false) {
            alert("이메일이 올바르지 않습니다!! @가 없음") 
        } else {

        
        // 2. 백엔드 컴퓨터에 보내주기( 백엔드 개발자가 만든 함수. 즉 API )
        //        => 나중에 할 것.

        // 3. 성공 알람 보여주기
            alert("회원가입을 축하합니다!!")
        }
    }

    return {
        <div>
            이메일 : <input type="text" onChange={onChangeEmail} />
            비밀번호 : <input type="password" onChange={onChangePassword} />
            <button onClick={onClickSignup}>회원가입</button>
        </div>
    };
}