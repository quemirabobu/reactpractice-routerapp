import {Link, NavLink, useNavigate} from 'react-router-dom';
import React, { Outlet,createContext,useState,useEffect,useCallback,useReducer, useRef,  } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function Mypage() {
const navi = useNavigate();
const isLogin = false;
useEffect( ()=>{
    if(!isLogin){
        navi('/login')
    }

},[navi, isLogin] )
    return (
        <div>
            mypage
        </div>
    );
}

export default Mypage;
