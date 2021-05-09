import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';
import cookie from "react-cookies";

export default function (SpecificComponent, option, adminRoute = null) {
    function AuthenticationCheck(props) {
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(auth(cookie.load("token"))).then(response => {
                console.log(response)
            })
        }, [])

        return (
            <SpecificComponent />
        )
    }
    return AuthenticationCheck
}