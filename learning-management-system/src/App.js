import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {

  const [studyType, setStudyType] = useState('')
  const [teachingMaterial, setTeachingMaterial] = useState('')
  const [materialType, setMaterialType] = useState('')

  return (
    <>
    <div className="container-fluid">
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
      <button className="btn btn-primary">学習イベントを作成する</button>
      <button className="btn btn-danger">全てのイベントを削除する</button>
      <hr/>
      <h3>学習項目一覧</h3>
      <table class="table table-hover">
        <thead>
          <tr><th>ID</th><th>学習種別</th><th>学習教材</th><th>教材種別</th><th></th></tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
    </>
  )
}

export default App