import { http } from "./urlConfig";

export const userService = {
  postLogin: (data) => {
    let url = "/auth/login";
    return http.post(url, data);
  },

  getInfor: (data, roleID) => {
    console.log("roleID:", roleID);
    console.log("data:", data);
    let roleName = "";
    switch (roleID) {
      case 1:
        roleName = "farmer";
        break;
      case 2:
        roleName = "supplier";
        break;
      case 3:
        roleName = "admin";
        break;
      default:
        roleName = "supplier";
        break;
    }
    let url = `/${roleName}/get-${roleName}/${data}`;
    return http.get(url);
  },

  getTrans: (data, roleName) => {
    let url = `/${roleName}/transaction/${data}`;

    console.log("url:", url);
    return http.get(url);
  },
};
