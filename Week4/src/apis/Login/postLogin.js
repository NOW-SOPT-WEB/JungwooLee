import { api } from "../../lib/api";

export const postLogin = (id, password, navigate) => {
  api
    .post("/member/login", {
      authenticationId: id,
      password: password,
    })
    .then((res) => {
      alert(res.data.message);
      navigate(`/home/${res.headers.location}`);
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};
