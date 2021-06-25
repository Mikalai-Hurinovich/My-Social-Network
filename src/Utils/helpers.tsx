import React from "react";
import {UserType} from "../Redux/users-reducer";

export const updateObjectInArray = (items: UserType[], itemId: number, objPropName: 'id', newObjProps: { followed: boolean }) => {
    return items.map((u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    }))
}
