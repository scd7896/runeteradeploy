import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './css/CostIcon.css'
import { ADD_COST_FILTER, RMV_COST_FILTER, SET_COST_FILTER } from '../action';
const CostIcon = ({cost})=>{
    const dispatch = useDispatch();
    const {costFilterList} = useSelector(state=> state.card)
    const check = costFilterList.findIndex((el)=> cost === el)
    const clickCostIcon = ()=>{
        dispatch({
            type : SET_COST_FILTER,
            data : cost
        })
    }
    return(
        <div className = {check === -1 ? "cost_icon_container none_selected" : "cost_icon_container"}
            onClick = {clickCostIcon}>
            <p>{cost}</p>
        </div>
    )
}
export default CostIcon;