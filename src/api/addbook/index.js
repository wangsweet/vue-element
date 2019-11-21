import http from "@utils/request";

export const addbook = (booksAuth, booksName, booksStatus, booksPrice, booksLogo) => http({
    method: "POST",
    url: "/books/addbooks",
    data: {
        booksAuth,
        booksName,
        booksStatus,
        booksPrice,
        booksLogo
    }
})