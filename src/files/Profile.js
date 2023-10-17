import {Link, NavLink, useNavigate, useParams} from 'react-router-dom';
import React, { Outlet,createContext,useState,useEffect,useCallback,useReducer, useRef,  } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function Profile() {
const navi = useNavigate();
const param = useParams();
const profiles = {go : {name:"gogicheon", job:"teacher"}, hong:{name:"honggildong", job:"nono"}}

    const giveprofile = profiles[param.firstName]

return (
        <div>
            <p>여기는 프로필</p>
            {giveprofile? (<div> <p>{giveprofile.name}</p>  <p> {giveprofile.job} </p></div>) : (<div>profile doesnt exist</div>) }

        </div>
    );
}

export default Profile;
