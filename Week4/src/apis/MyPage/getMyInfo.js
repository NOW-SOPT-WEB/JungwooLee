import { api } from "../../lib/api";

export const getMyInfo = (userId) => {
  return api
    .get("/member/info", {
      headers: {
        memberId: userId,
      },
    })
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};
