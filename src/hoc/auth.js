import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {auth} from '../_actions/user_action';
import cookie from "react-cookies";

export default function (SpecificComponent, option, adminRoute = null) {
    function AuthenticationCheck(props) {
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(auth(cookie.load("token"))).then(response => {
                console.log(response)
                let role = response.payload.authorities.length
                if (role === 2) {
                    props.history.push('/admin')
                }
                if (adminRoute && !(role === 2)) {
                    props.history.push('/')
                } else {
                    if (option === 0) {
                        props.history.push('/main')
                    }
                }
            }).catch(() => {
                if (adminRoute) {
                    props.history.push('/')
                }
                if (option) {
                    props.history.push('/')
                }
            })
        }, [])

        return (
            <SpecificComponent/>
        )
    }

    return AuthenticationCheck
}