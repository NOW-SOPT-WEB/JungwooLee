import { api } from "../../lib/api";

export const postSignUp = (id, password, nickname, phone, resolve, reject) => {
  api
    .post("/member/join", {
      authenticationId: id,
      password: password,
      nickname: nickname,
      phone: phone,
    })
    .then(() => {
      resolve();
    })
    .catch((err) => {
      reject(err.response.data.message);
    });
};
