import http from "@utils/request";
//渲染
export const booklist = (page, limit) => http({
    method: "get",
    url: "/books/booksList",
    data: {
        page: page,
        limit: limit
    }
})
//删除
export const booklistdete = (id) => http({
    method: "get",
    url: "/books/delete",
    data: {
        id
    }
})
//修改
export const booklistchange = (booksAuth, booksName, booksStatus, booksPrice, booksLogo, id) => http({
    method: "post",
    url: "/books/modify",
    data: {
        booksAuth,
        booksName,
        booksStatus,
        booksPrice,
        booksLogo,
        id
    },
})

//选择渲染
//排序
export const booklistsort = ( number) => http({
    method: "get",
    url: "/books/booksSort",
    data: {
        number: number
    },
})
//模糊查询
export const booklistsearch = ( value) => http({
    method: "get",
    url: "/books/booksSearch",
    data: {
        value
    }
})