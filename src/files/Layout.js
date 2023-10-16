import {Outlet,Link, NavLink, useNavigate} from 'react-router-dom';
import React from 'react';

function Layout() {

    //useNavigate : Link컴포넌트 없이 링크 이동


    const navi = useNavigate();
    //뒤로가기 버튼 눌렀을때
    const goBack = ()=>{
        //이전 페이지로 이동
        navi(-1);
    }
    const goAtricles = ()=>{
        navi('/articles');
    }
    const gohome = ()=>{
        navi('/');
    }

    const movePage = (pageName)=>{
        navi('/' + pageName)
    }

    return (
        <div>
            <header style={{background: "lightgray", padding: 16, fontSize: 24}}> Header
                <button type={"button"} onClick={()=>goBack()}>뒤로가기</button>
                <button type={'button'} onClick={ ()=>goAtricles()}> Articles</button>
                <button type={'button'} onClick={gohome}> gohome</button>
                {/*   매개변수가 없으면 그냥 gohome 해도 되는데 매개변수가 있으면  ()=> 이거를 해야한다.  */}
                <p>여기까지</p>
                <button type={'button'} onClick={()=> movePage('introduce')}> Introduce</button>
                <button type={'button'} onClick={ () => movePage('profile/go')}> Go's profile</button>
                <button type={'button'} onClick={ () => movePage('articles')}> Articles</button>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
}

export default Layout;
