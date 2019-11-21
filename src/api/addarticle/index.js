import http from "@utils/request";

export const addarticle = (articleTitle, content) => http({
    method: "post",
    url: "/article/articlePush",
    data: {
        articleTitle,
        content
    },
})