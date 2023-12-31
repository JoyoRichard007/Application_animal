import { actions } from "./actions"

/* animal object
    attrs:
    - id
    - type
    - nom
    - couleur
    - image
*/

const initialState = []

const animalReducer = (state=initialState, action) => {
    const { type, payload } = action
    switch(type) {
        case actions.ADD_ANIMAL:
            const newAnimal = {...payload, id: state.length + 1}
            return [...state, newAnimal]

        case actions.CHANGE_ANIMAL:
            return state.map(animal => {
                if(animal.id === payload.idAnimal) {
                    return newData
                } else {
                    return animal
                }
            })

        case actions.REMOVE_ANIMAL:
            return state.filter(animal => animal.id !== payload)
            
        default:
            return state
    }
}

export default animalReducer