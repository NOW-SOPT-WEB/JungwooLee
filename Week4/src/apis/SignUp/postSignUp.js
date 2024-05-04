import { api } from "../../lib/api";

export const postSignUp = (id, password, nickname, phone, navigate) => {
  api
    .post("/member/join", {
      authenticationId: id,
      password: password,
      nickname: nickname,
      phone: phone,
    })
    .then((res) => {
      alert(res.data.message);
      navigate("/");
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};
