export const REQUEST_LISTS = 'REQUEST_LISTS'
export const RECEIVE_LISTS = 'RECEIVE_LISTS'


export const fetchLists = () => dispatch => {
  const LIST = [
    { title: 'Butter' },
    { title: 'Bread' },
    { title: 'Eggs' },
    { title: 'Fish' },
    { title: 'Cake :3' },
  ]

  dispatch({ type: REQUEST_LISTS })
  setTimeout(
    () => dispatch({ type: RECEIVE_LISTS, lists: [] })
  ,1000)
}

