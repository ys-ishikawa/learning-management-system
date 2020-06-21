import React, {useState, useContext} from 'react'
import { ADD_ITEM, DELETE_ALL_ITEMS } from '../actions';
import AppContext from '../contexts/AppContext';

const ItemsForm = () => {

    const btnStyle = {
      margin: "0 15px 15px 0"
    }
    
    const {dispatch} = useContext(AppContext)
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
        const deleteAllConfirm = window.confirm('全ての学習項目を削除しても本当によろしいですか？')
        if (deleteAllConfirm) dispatch({ type: DELETE_ALL_ITEMS })
      }

      const unAddable = studyType === '' || teachingMaterial === '' || materialType === ''

    return (
        <>
            <h3>学習管理システム</h3>
            <form>
              <div className="form-group">
                  <label htmlFor="studyType">学習内容</label>
                  <input className="form-control" id="studyType" value={studyType} onChange={e => setStudyType(e.target.value)}/>
              </div>
              <div className="form-group">
                  <label htmlFor="teachingMaterial">学習教材名</label>
                  <input className="form-control" id="teachingMaterial" value={teachingMaterial} onChange={e => setTeachingMaterial(e.target.value)} />
              </div>
              <div className="form-group">
                  <label htmlFor="materialType">教材種別</label>
                  <select className="custom-select custom-select-lg mb-3" value={materialType} onChange={e => setMaterialType(e.target.value)}>
                    <option value="">↓↓ 以下から選択してください ↓↓</option>
                    <option value="書籍">書籍</option>
                    <option value="Udemy">Udemy</option>
                    <option value="その他">その他</option>
                  </select>
              </div>
            </form>
            <button style={btnStyle} className="btn btn-primary" onClick={addItem} disabled={unAddable}>学習記録を登録する</button>
            <button style={btnStyle} className="btn btn-danger" onClick={deleteAllItems}>全ての学習記録を削除する</button>
        </>
    )
}
export default ItemsForm