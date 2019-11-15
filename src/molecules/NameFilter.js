import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { SET_FILTER_NAME } from '../action';
import './css/NameFilter.css'
const NameFilter = ()=>{
    const dispatch = useDispatch();
    const {filterNameContents} = useSelector((state)=> state.card)
    const nameChange = (e)=>{
        dispatch({
            type : SET_FILTER_NAME,
            data : e.target.value
        })
    }
    return(
        <div className = "input_name_container">
            <input className = "input_name_text" type = "text" value = {filterNameContents} onChange = {nameChange}
            placeholder = "이름을 입력하세요 "/>
        </div>
    )
}

export default NameFilter;