import { useEffect, useState } from "react"

const UseProjects = () => {
    const [Projects, setProjects] = useState([])
    useEffect(() => {
        fetch("projectData.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return [Projects, setProjects];
}

export default UseProjects;