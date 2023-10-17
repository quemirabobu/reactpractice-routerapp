import {Link, NavLink, useNavigate} from 'react-router-dom';
import React, { Outlet,createContext,useState,useEffect,useCallback,useReducer, useRef,  } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function Notfound() {
const navi = useNavigate();
    return (
        <div>
            hahah sibar
        </div>
    );
}

export default Notfound;
