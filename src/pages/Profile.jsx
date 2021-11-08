import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {TOGGLE_SHOW_PROFILE} from "../store/profile/action";

const Profile = () => {
    const dispatch = useDispatch();
    const isShow = useSelector(state => state.isShow);

    return (
        <div>
            <h1>Профиль</h1>
            <input type="checkbox" checked={isShow} onChange={()=>{
                dispatch({type: TOGGLE_SHOW_PROFILE});
                console.log(isShow);
            }}/>
        </div>
    )
}

export default Profile;

