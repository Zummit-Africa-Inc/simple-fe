import React from 'react'
import { useParams } from 'react-router-dom'
import {  useSelector } from 'react-redux'

const SingleApi = () => {
  const id = useParams().id
  const { apis } = useSelector(store => store.apis)
  const api = apis.find(api => api.id === id)

  if(!api) {
    return (
      <div>
        <h2>404. API with the specified id not found.</h2>
      </div>
    )
  }

  return (
    <div>
      <h2>{api.name}</h2>
      <h3>{api.description}</h3>
      <h3>{api.url}</h3>
      <h3>{api.subscribers}</h3>
      {api.category.map(item => (
        <h3 key={item}>{item}</h3>
      ))}
      <h3>{api.status ? 'Verified' : 'Not Verified'}</h3>
    </div>
  )
}

export default SingleApi