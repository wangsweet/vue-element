export default{
    path:"/list",
    component:_=>import("@pages/list"),
    name:"list",
    // meta:{
    //     flag:true
    // },
    children:[
        {
        path:"/list",
        redirect: "/list/homepage"
        },
        {
            path:"homepage",
            component:_=>import("@components/homepage"),
            name:"homepage",
        },
        {
            path:"booklist",
            component:_=>import("@components/booklist"),
            name:"booklist",
        },
        {
            path:"addbook",
            component:_=>import("@components/addbook"),
            name:"addbook",
        },
        {
            path:"addarticle",
            component:_=>import("@components/addarticle"),
            name:"addarticle",
        },
        {
            path:"articlelist",
            component:_=>import("@components/articlelist"),
            name:"articlelist",
        },
        {
            path:"usercontent",
            component:_=>import("@components/usercontent"),
            name:"usercontent",
        }
    ]
}