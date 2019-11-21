import http from "@utils/request";

export const usercontent=(page,limit)=>http({
    method: "get",
    url: "/user/userMess",
    data: {
        page:page,
        limit: limit
    }
})