import http from "@utils/request";

export const registe = (username, password) => http({
    method: "POST",
    url: "/users/register",
    data: {
        username,
        password
    },
})