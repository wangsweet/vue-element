import http from "@utils/request";

export const login =(username,password)=>http({
    method:"POST",
    url: "/users/login",
    data: {
        username,
        password
    },
})