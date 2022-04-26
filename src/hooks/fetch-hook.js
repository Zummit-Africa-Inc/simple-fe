import { useCallback, useEffect, useState } from 'react'

export const useFetch = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    const sendRequest = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {
            const res = await fetch(url, { method, body, headers })
            const data = await res.json()

            if(!res.ok) {
                throw new Error(data.message)
            }

            setLoading()
            return data
        } catch (err) {
            setError(err)
            setLoading(false)
        }
    },[])

    const clearError = () => setError(null)

    return { loading, error, sendRequest, clearError }
}
