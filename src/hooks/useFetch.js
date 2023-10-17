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
            'YutWu-Delivery-App': 1,
            'Sistema-Ventas': 2,
            'Biblioteca-Nacional': 3,
            'Weather-React': 4,
            'Peliculas-React': 5,
            'To-do-App-Flutter': 6,
            // 'Chat-App': 7
        }
        return repoIndex[nombre]
    }

    const getImgRepo = (nombre) => {
        const repoIndex = {
            'Clinica-App': '/src/assets/img/medicmobile-app.png',
            'YutWu-Delivery-App': '/src/assets/img/yutwu-app.png',
            'Sistema-Ventas': 'src/assets/img/sistema-ventas.png',
            'Biblioteca-Nacional': 'src/assets/img/biblioteca-nacional.png',
            'Weather-React': 'src/assets/img/weather-react.png',
            'Peliculas-React': 'src/assets/img/peliculas-react.png',
            'To-do-App-Flutter': 'src/assets/img/todo-app-flutter.png',
            // 'Chat-App': 'src/assets/img/.png',
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
                    portada: getImgRepo(name),
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
