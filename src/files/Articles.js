import {Link, Outlet, NavLink, useNavigate} from 'react-router-dom';
import React, { createContext,useState,useEffect,useCallback,useReducer, useRef,  } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ArticleItem = ({id}) => {
    //style을 변수로 정의하고 inlinestyle로 지정

    const activeStyle = {
        color: 'green', fontSize: 21


    };
    return (<li><NavLink to={`/articles/${id}`} style={({isActive}) =>

        (isActive ? activeStyle : undefined)
    }> 게시글 {id} </NavLink></li>);


}


function Articles() {
    return (
        <div>
            <h1>여기는 아티클</h1>

            <div>
                {/*     outlet:중첩된 route를 표출해주는 컴포넌트   */}
                <Outlet>  </Outlet>
                <ArticleItem id={1}></ArticleItem>
                <ArticleItem id={2}></ArticleItem>
                <ArticleItem id={3}></ArticleItem>
                {/*상세글이 나오고 목록이 아래 나오도록 할 수 있다.*/}

            </div>

        </div>
    );
}

export default Articles;
