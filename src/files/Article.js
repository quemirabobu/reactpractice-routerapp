import {Link, NavLink, useNavigate, useParams} from 'react-router-dom';
import React, { Outlet,createContext,useState,useEffect,useCallback,useReducer, useRef,  } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function Article() {
const navi = useNavigate();
const param = useParams();

    return (
        <div>
<p>게시물 {param.id}</p>
        </div>
    );
}

export default Article;
