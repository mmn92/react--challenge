import api from '../../services/api'
import { useQuery, usePaginatedQuery } from 'react-query'

const fetchPeople = (key, page) => {
  return api.get(`/people${page ? `/?page=${page}` : ''}`)
}

export const useList = (page) => {
  const { status, data, error } = useQuery(['swpeople', page], fetchPeople)
  return status === 'success' ? data.data.results : []
}

export const usePaginatedList = (page) => {
  const {
    status,
    resolvedData,
    error,
    isFetching,
  } = usePaginatedQuery(['swpeople', page], fetchPeople)
  return {status, resolvedData, isFetching, error}
}