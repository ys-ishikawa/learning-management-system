import React, {useState, useContext} from 'react'
import { ADD_ITEM, DELETE_ALL_ITEMS } from '../actions';
import AppContext from '../contexts/AppContext';

const ItemsForm = () => {

    const {state, dispatch} = useContext(AppContext)
    const [studyType, setStudyType] = useState('')
    const [teachingMaterial, setTeachingMaterial] = useState('')
    const [materialType, setMaterialType] = useState('')

    const addItem = e => {
        e.preventDefault()
        dispatch({
          type: ADD_ITEM,
          studyType,
          teachingMaterial,
          materialType
        })
        setStudyType('')
        setTeachingMaterial('')
        setMaterialType('')
      }
      
      const deleteAllItems = e => {
        e.preventDefault()
        dispatch({
          type: DELETE_ALL_ITEMS
        })
      }

    return (
        <>
            <h3>学習管理システム</h3>
            <form>
            <div className="form-group">
                <label htmlFor="studyType">学習種別</label>
                <input className="form-control" id="studyType" value={studyType} onChange={e => setStudyType(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="teachingMaterial">学習教材</label>
                <input className="form-control" id="teachingMaterial" value={teachingMaterial} onChange={e => setTeachingMaterial(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="materialType">教材種別</label>
                <input className="form-control" id="materialType" value={materialType} onChange={e => setMaterialType(e.target.value)} />
            </div>
            </form>
            <button className="btn btn-primary" onClick={addItem}>学習記録を作成する</button>
            <button className="btn btn-danger" onClick={deleteAllItems}>全ての学習記録を削除する</button>
        </>
    )
}
export default ItemsForm