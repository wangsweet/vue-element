import http from "@utils/request";

export const articlelist=(page,limit)=>http({
    method:"get",
    url:"/article/articleList",
    data: {
        page:page,
        limit: limit
    }
})