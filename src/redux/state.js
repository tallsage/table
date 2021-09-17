import {renderEntireTree} from '../render'

let state = 
[{
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
        Type: '',
        Name: '',
        Theme: '',
        Page: '',
        Rating: '',
        id: ''
    }
    state[0].table.push(newString)
    state.newPerson = ''
    renderEntireTree(state)
}

export const updateStringPerson = (newText) => {
    console.log(newText);
    state.newPerson = newText
    renderEntireTree(state)
}


export default state