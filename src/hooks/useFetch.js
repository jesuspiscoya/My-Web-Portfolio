import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [repo, setRepo] = useState({
        data: null,
        isLoading: true,
        error: null
    })
    const listRepos = []

    const getFetch = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()

            data.map(({ id, name, description, html_url, topics }) => {
                listRepos.push({
                    id: id,
                    nombre: name,
                    descripcion: description,
                    url: html_url,
                    topics: topics
                })
            })

            setRepo({
                data: listRepos,
                isLoading: false,
                error: null
            })
        } catch (error) {
            setRepo({
                data: null,
                isLoading: false,
                error: error
            })
        }
    }

    useEffect(() => {
        if (!url) return
        getFetch()
    }, [url])

    return repo
}
