import {renderEntireTree} from '../render'

let state = 
[{
  name: 'ДОКЛАДЫ',
  id: 1,
  table :[{
    Person: 'Николаев Николай',
    Type: 'Учебно-методическая',
    Name: 'Как в React',
    Theme: 'Frontend',
    Page: '13',
    Rating: '3.14',
    id: 1
  },
  {
    Person: 'Андреев Андрей',
    Type: 'Докторская',
    Name: 'А что Noda',
    Theme: 'Backend',
    Page: '44',
    Rating: '2.7',
    id: 2
  },
  {
    Person: 'Андреев Андрей',
    Type: 'Учебно-методическая',
    Name: `express, а что, а вдруг`,
    Theme: 'FullStack',
    Page: '282',
    Rating: '4.20',
    id: 3
  },
  {
    Person: 'Николаев Николай',
    Type: 'Докторская',
    Name: 'MERN?',
    Theme: 'FullStack',
    Page: '322',
    Rating: '14.88',
    id: 4
}]
}]

export const addString = () => {
    var newString = {
        Person: state.newPerson,
        Type: state.newType,
        Name: state.newName,
        Theme: state.newTheme,
        Page: state.newPage,
        Rating: state.newRating,
        id: state.id
    }
    state[0].table.push(newString)
    state.newPerson = ''
    state.newType = ''
    state.newName = ''
    state.newTheme = ''
    state.newPage = ''
    state.newRating = ''
    state.id = ''
    renderEntireTree(state)
}

export const addTable = () => {
    var newTable = {
        name: state.Name
    }
    state.push(newTable)
    state.Name = ''
    renderEntireTree(state)
}

export const updateStringPerson = (newText) => {
    state.newPerson = newText
    renderEntireTree(state)
}

export const updateStringType = (newText) => {
    state.newType = newText
    renderEntireTree(state)
}

export const updateStringName = (newText) => {
    state.newName = newText
    renderEntireTree(state)
}

export const updateStringTheme = (newText) => {
    state.newTheme = newText
    renderEntireTree(state)
}

export const updateStringPage = (newText) => {
    state.newPage = newText
    renderEntireTree(state)
}

export const updateStringRating = (newText) => {
    state.newRating = newText
    renderEntireTree(state)
}

export const updateIntId = (newText) => {
    state.id = newText
    renderEntireTree(state)
}

export const createTableName = (newText) => {
    state.Name = newText
    renderEntireTree(state)
}

export default state