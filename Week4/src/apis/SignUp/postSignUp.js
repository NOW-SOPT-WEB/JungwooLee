import { api } from "../../lib/api";

export const postSignUp = (id, password, nickname, phone, navigate) => {
  api
    .post("/member/join", {
      authenticationId: id,
      password: password,
      nickname: nickname,
      phone: phone,
    })
    .then(() => {
      alert("회원가입이 완료되었습니다~!!");
      navigate("/");
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};
