import {Link, NavLink, useNavigate} from 'react-router-dom';
import React, { Outlet,createContext,useState,useEffect,useCallback,useReducer, useRef,  } from 'react';
import styled from 'styled-components';

function Home() {
    return (
        <div>
        <h1>Home</h1>
        <ul>
            <li><Link to={"/introduce"}> </Link>  </li>

        </ul>
        </div>
    );
}

export default Home;
