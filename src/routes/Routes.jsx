import Blog from "../pages/blog/Blog";
import CountryServe from "../pages/countryService/CountryServe";
import Dashboard from "../pages/dashboard/Dashboard";


const NavData =
    [
        { id: 1, name: "Not Found", path: "*", element: <h1 className="grid place-content-center py-40 text-3xl">Not Found</h1>, isPrivate: false },
        { id: 2, name: "Dashboard", path: "/", element: <Dashboard/>, isPrivate: false },
        { id: 3, name: "Blog", path: "/blog", element: <Blog/>, isPrivate: false },
        { id: 4, name: "Country Serve", path: "/country-serve", element: <CountryServe/>, isPrivate: false },
        // { id: 5, name: "", path: "", element: "", isPrivate: false },
        // { id: 6, name: "", path: "", element: "", isPrivate: false },
        // { id: 7, name: "", path: "", element: "", isPrivate: false },
        // { id: 8, name: "", path: "", element: "", isPrivate: false },
        // { id: 9, name: "", path: "", element: "", isPrivate: false },
    ];

export default NavData;
