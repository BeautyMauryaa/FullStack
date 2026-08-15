//routing is basically travel one component/page to another by wraping the pages into browserrouting

// its like map of app which tell on which url which compoenent have to show
// like:
// /-home, /address=address page ,/dashboard=dashboard page


import {BrowserRouter,Routes,Route} from "react-router-dom"
function App(){
    <BrowserRouter>
    <Routes>
        <Route path="/" address={<home/>}/> // path- address and address-component 
        <Route path="/contact" address={<contact/>}/>
    </Routes>
    </BrowserRouter>
}


//navigation: link vs navlink
//in react we don't use <a> because its refresh the page and in react we made singlepage application that's why instead of this we use
//link: for simple navigation
//navlink: if want .active state(best for csssyling)(mainly use in navbar)



//dynamic routing: page will be same just some part of the page will be same
//path="user/product/:id" means everything will be same just":id" part will be same:
// for example in shopping page: you have searhc phone then one page will be opne phone...in which thousands of phone will be available and you click on vivo then it will change like this
// /user/product/phone/:vivo then you click on samsung../user/product/phone/:samsung...means dynamic part of a compoenent whiich will change 

//in app.js

import {BrowserRouter,Routes,Route} from "react-router-dom";

function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/user/:username" address={<home/>}/>
            <Route path="user/product/:id/" address={<home/>}/>
        </Routes>
        </BrowserRouter>
    )
}

//userpage:
import {useParam} from "react-router-dom";

function UserPage(){
    const {username}=useParam();//to fetch the value from url we use useparam
    return(
        <h1>WELCOME,{username}</h1>
    )
}


//NESTING ROUTING: Inside one url there is another url for ex: we have dashboard and inside dashboard there is sidebard and inside sidebar there is pages
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App(){
    return(
        <BrowserRouter>
        <Routes>
<Route path="/dashboard" address={<dashboard/>}>
//dashboard/profile
<Route path="/profile"   adress={<profile/>}/>
//dashboard/setting
<Route path="/setting" adress={<setting/>}/>
//these are profile and setting these are child of dashboard..to render this we use outlet
</Route>
</Routes>
        </BrowserRouter>
    )
}


//dashabord page:

import {Outlet} from "react-router-dom"

function Dashboard(){
    return(
        <div>
            <sidebar/>
            <div>
                <Outlet/> //profile or setting will display here
            </div>
        </div>
    )
}



//Programmatic Navigation: useNavigate: its like rendering the user to another page after completing some event or action:
//for ex: after submit event on button dsahbord page should be open then we can use useNavigation
//or for ex: after clicking on login button the dahsboard login page or should be open:

//import {useNavigate} form "react-router-dom";
function LoginPage(){
    const navigate=useNavigate();
    const handlelogin=()=>{
        navigate ("/dashboard");
    }
    return(
   <button onClick={handlelogin}>Login </button>
    )
}


//Protected Routes : we use protection route when we don't want the user see that page without doing that action
//for ex: without login i don't want user can see dashboard page..(mainly use for protecting some pages)
import {navigate} from "react-router-dom"

function PrivateRoute({children}){
 const isAuth="fasle";
 if(!isAuth){
    return <navigate to="/login"/>
 }
 return children;

}

//app.js
{/* <Route path="/dashboard"
element={
    <PrivateRoute>
        <Dashboard/>
    </PrivateRoute>
}
/> */}

//handling 404 error:
//imagine user has given wrong url or that url which doesn't exist then in that case 
//we use astricks(*) sign to handle that

<Route path="*" element={<NOTFOUNTPAGE/>}/>

//URLPARAMS - useparams- product id/username
//query params- usesearchparam - filter/search/{?sort:price}



//v5 and v6
//switch-routes
//component-element
//usehistory-usenavigate