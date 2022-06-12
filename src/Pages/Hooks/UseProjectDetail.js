import { useEffect, useState } from "react";

const useProjectDetail = projectId => {
    const [project, setProject] = useState({});

    useEffect(() => {
        const url = `https://calm-scrubland-98189.herokuapp.com/project/${projectId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setProject(data));

    }, [projectId]);
    return [project]
}

export default useProjectDetail;