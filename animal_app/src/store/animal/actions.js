export const actions = {
    ADD_ANIMAL: "CREATE ANIMAL",
    CHANGE_ANIMAL: "CHANGE ANIMAL",
    REMOVE_ANIMAL: "KILL ANIMAL"
}

const createAnimalAction = (dataAnimal) => ({
    type: actions.ADD_ANIMAL,
    payload: dataAnimal
})

const changeAnimalAction = (idAnimal, newData) => ({
    type: actions.CHANGE_ANIMAL,
    payload: { idAnimal , newData }
})

const killAnimalAction = (idAnimal) => ({
    type: actions.REMOVE_ANIMAL,
    payload: idAnimal
})

export { createAnimalAction, changeAnimalAction, killAnimalAction }