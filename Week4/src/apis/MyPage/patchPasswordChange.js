import { api } from "../../lib/api";

export const patchPasswordChange = (
  userId,
  previousPassword,
  newPassword,
  newPasswordVerification,
  navigate
) => {
  if (
    previousPassword.length === 0 ||
    newPassword.length === 0 ||
    newPasswordVerification.length === 0
  ) {
    alert("입력란을 모두 채워주세요!!");
  } else {
    api
      .patch(
        "/member/password",
        {
          previousPassword: previousPassword,
          newPassword: newPassword,
          newPasswordVerification: newPasswordVerification,
        },
        {
          headers: {
            memberId: userId,
          },
        }
      )
      .then((res) => {
        alert(res.data.message);
        navigate("/");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }
};
