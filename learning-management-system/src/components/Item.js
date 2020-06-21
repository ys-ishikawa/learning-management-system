import React, { useContext } from 'react'
import { DELETE_ITEM } from '../actions'
import AppContext from '../contexts/AppContext'

const Item = ({item}) => {

    const id = item.id
    const {dispatch} = useContext(AppContext)

    const deleteItem = e => {
        e.preventDefault()
        const deleteItemConfirm = window.confirm(`id=${id}の学習項目を本当に削除しますか？`)
        if(deleteItemConfirm) {
            dispatch({
                type: DELETE_ITEM,
                id
            })
        }
    }

    return(
        <tr>
            <td>{id}</td>
            <td>{item.studyType}</td>
            <td>{item.teachingMaterial}</td>
            <td>{item.materialType}</td>
            <td>{item.createdAt}</td>
            <td><button className="btn btn-danger" onClick={deleteItem}>削除する</button></td>
        </tr>
    )

}
export default Item