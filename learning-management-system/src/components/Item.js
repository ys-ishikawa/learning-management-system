import React from 'react'

const Item = ({item}) => {

    const id = item.id

    return(
        <tr>
            <td>{id}</td>
            <td>{item.studyType}</td>
            <td>{item.teachingMaterial}</td>
            <td>{item.materialType}</td>
            <td><button className="btn btn-danger">削除する</button></td>
        </tr>
    )

}
export default Item