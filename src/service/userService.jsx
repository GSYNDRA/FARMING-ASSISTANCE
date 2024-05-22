import { http } from "./urlConfig";

export const userService = {
  postLogin: (data) => {
    let url = "/auth/login";
    return http.post(url, data);
  },

  getInfor: (data, roleName) => {
    let url = `/${roleName}/get-${roleName}/${data}`;
    return http.get(url);
  },

  getTrans: (data, roleName) => {
    let url = `/${roleName}/transaction/${data}`;
    return http.get(url);
  },

  getProduct: (roleName) => {
    let url = `/${roleName}/store`;
    return http.get(url);
  },
  getDetailProduct: (id) => {
    let url = `/admin/order/${id}`;
    return http.get(url);
  },
  getTransDetail: (id, roleName) => {
    let url = `/${roleName}/transaction/${id}`;
    return http.get(url);
  },

  changeData: (data, id) => {
    let url = `/admin/update-info/${id}`;
    return http.put(url, data);
  },
};