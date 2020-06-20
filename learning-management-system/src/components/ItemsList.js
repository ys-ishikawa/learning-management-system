import React, {useContext} from 'react'
import AppContext from '../contexts/AppContext'
import Item from './Item'

const ItemsList = () => {

    const { state } = useContext(AppContext)

    return(
        <>
            <h3>学習項目一覧</h3>
                <table class="table table-hover">
                    <thead>
                    <tr><th>ID</th><th>学習種別</th><th>学習教材</th><th>教材種別</th><th></th></tr>
                    </thead>
                    <tbody>
                        { state.items.map((item, index) => (<Item key={index} item={item} />)) }
                    </tbody>
                </table>
        </>
    )
}
export default ItemsList