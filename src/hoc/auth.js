import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {auth} from '../_actions/user_action';
import cookie from "react-cookies";

export default function (SpecificComponent, option, adminRoute = null) {
    function AuthenticationCheck(props) {
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(auth(cookie.load("token"))).then(response => {
                if (response.payload.authorities[0].authorityName === "ROLE_USER") {
                    console.log("ROLE_USER")
                    console.log(response)
                } else {
                    console.log("????")
                }
            })
        }, [])

        return (
            <SpecificComponent/>
        )
    }

    return AuthenticationCheck
}