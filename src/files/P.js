import {Route, Routes} from "react-router-dom";
import Layout from "./files/Layout";
import Home from "./files/Home";
import Introduce from "./files/Introduce";
import Profile from "./files/Profile";
import Articles from "./files/Articles";
import Article from "./files/Article";
import Login from "./files/Login";
import Mypage from "./files/Mypage";
import Notfound from "./files/Notfound";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout></Layout>}>
                <Route index element={<Home></Home>}></Route>
                <Route path={'/introduce'} element={<Introduce></Introduce>}></Route>
                <Route path={"/profile/:firstName"} element={<Profile></Profile>}></Route>
                <Route path={"/articles"} element={<Articles></Articles>}>
                    <Route path={":id"} element={<Article></Article>}></Route>
                </Route>
                <Route path={'/login'} element={<Login></Login>}></Route>
                <Route path={'/mypage'} element={<Mypage></Mypage>}></Route>
            </Route>
            <Route path={'*'} element={<Notfound></Notfound>}></Route>

        </Routes>


    );
}

export default App;
