import React, { useReducer, useEffect } from "react";
import { usePaginatedList } from './hooks/useList';

import "./styles.css";

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_COUNT':
      return {...state, count: action.payload}
    case 'SET_PAGE':
      return {...state, page: action.payload}
    case 'SET_EXPANDED':
        return {...state, expanded: action.payload}  
    default:
      return {...state}
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {page: 1, count: 0, expanded: 0})
  const paginatedList = usePaginatedList(state.page)

  useEffect(() => {
    dispatch({type: 'SET_COUNT', payload: state.page})
  }, [state.page])

  useEffect(() => {
    dispatch({type: 'SET_EXPANDED', payload: 0})
  }, [paginatedList.resolvedData])

  if(paginatedList.status === 'error') {
    return <div>Error: {paginatedList.error}</div>
  }

  return (
    <div>
      {paginatedList.status === 'success' && <>
        <span>Page {state.count}</span>
        <div>
          <ul data-testid="repository-list">
            {paginatedList.resolvedData.data.results.map((repo, index) => (
              <li key={index}>
                {repo.name}
                <button onClick={() => dispatch({type: 'SET_EXPANDED', payload: index})}>
                  More
                </button>
              </li>
            ))}
          </ul>
          <div style={{
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center',
            width: '250px', 
            padding: '15px', 
            border: '3px solid purple',
            borderRadius: '8px',
            background: '#7159c1',
            color: '#fff'
            }}>
            <span>{paginatedList.resolvedData.data.results[state.expanded].name}</span>
            <span>{paginatedList.resolvedData.data.results[state.expanded].gender}</span>
            <span>{paginatedList.resolvedData.data.results[state.expanded].height}</span>
          </div>
        </div>

        <div>
          <button 
            disabled={paginatedList.isFetching || state.page === 1}
            onClick={() => {
              dispatch({type: 'SET_PAGE', payload: state.page - 1})
            }}>Prev</button>{' '}
          <button 
            disabled={paginatedList.isFetching}
            onClick={() => {
              dispatch({type: 'SET_PAGE', payload: state.page + 1})
            }}>Next</button>
        </div>
        {paginatedList.isFetching && <span>Loading more...</span>}
        </>}
    </div>
  );


}

export default App;
