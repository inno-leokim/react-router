import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
    
    return(
        <div>
            <h3>유저 목록</h3>
            <ul>
                <li>
                    <NavLink 
                        to="/profiles/velopert"
                        className={({ isActive, isPending }) => 
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >velopert</NavLink>
                </li>
                <li>
                    <NavLink to="/profiles/gildong"
                        className={({ isActive, isPending }) => 
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                    >gildong</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<div>유저를 선택해주세요</div>}/>
                <Route path=":username" element={<Profile/>}/>
            </Routes>
            <WithRouterSample />
        </div>
    )    
}

export default Profiles;