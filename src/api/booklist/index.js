import http from "@utils/request";

export const booklist=(page,limit)=>http({
    method: "get",
    url: "/books/booksList",
    data: {
        page:page,
        limit: limit
    }
})