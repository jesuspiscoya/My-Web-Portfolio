import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const listRepos = []
    const [repo, setRepo] = useState({
        data: null,
        isLoading: true,
        error: null
    })

    const getIndexRepo = (nombre) => {
        const repoIndex = {
            'Clinica-App': 0,
            'Sistema-Ventas': 1,
            'YutWu-Delivery-App': 2,
            'Biblioteca-Nacional': 3,
            'To-do-App-Flutter': 4,
            'Weather-React': 5,
            'Chat-App': 6,
            'Peliculas-React': 7,
            'Carrito-React': 8
        }
        return repoIndex[nombre]
    }

    const getFetch = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()

            data.map(({ id, name, description, html_url, topics }) => {
                listRepos[getIndexRepo(name)] = {
                    id: id,
                    nombre: name.replaceAll('-', ' '),
                    descripcion: description,
                    url: html_url,
                    topics: topics
                }
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
