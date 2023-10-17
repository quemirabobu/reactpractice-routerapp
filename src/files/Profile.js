import {Link, NavLink, useNavigate, useParams} from 'react-router-dom';
import React, { Outlet,createContext,useState,useEffect,useCallback,useReducer, useRef,  } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const profiles = {
    go: {name: "고기천", job: "강사"}, hong: {name: "홍길동", job: "의적"}
};
function Profile() {
    //url 파라미터 받아주기
    const params = useParams();
    useEffect(()=>{
        console.log(params);
    },[])
    const selectedProfile = profiles[params.firstName];
    return (
        <div>
            <h1> 여기는 프로필 </h1>
            { selectedProfile? (
                <div>
                    <h2> {selectedProfile.name}</h2>
                    <p>{selectedProfile.job}</p>
                </div>) : (  <p>notExist profile</p> )
            }
        </div>
    );
}

export default Profile;
