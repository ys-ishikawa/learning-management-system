import {
    ADD_ITEM,
    // DELETE_ITEM,
    DELETE_ALL_ITEMS,
} from '../actions'

const items = (state =[], action) => {
    switch(action.type) {
        case ADD_ITEM:
            const items = {
                studyType: action.studyType,
                teachingMaterial: action.teachingMaterial,
                materialType: action.materialType,
            }
            const length = state.length
            const id = length === 0 ? 1 : state[length - 1].id + 1
            return [...state, {id, ...items}]
        case DELETE_ALL_ITEMS:
            return []
        default:
            return state
    }
}
export default items