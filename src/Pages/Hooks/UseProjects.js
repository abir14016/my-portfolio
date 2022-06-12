import { useEffect, useState } from "react"

const UseProjects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch("https://calm-scrubland-98189.herokuapp.com/project")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return [projects, setProjects];
}

export default UseProjects;