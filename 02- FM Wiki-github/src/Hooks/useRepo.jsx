import { useState } from "react";
import { api } from "../services/Api";
const useRepo = () => {
    const [currentRepo, setCurrentRepo] = useState("");
    const [repos, setRepos] = useState([]);

    const handleSearchRepo = async () => {
        const { data } = await api.get(`repos/${currentRepo}`);

        if (data.id) {
            const isExist = repos.find((repo) => repo.id === data.id);

            if (!isExist) {
                setRepos((prev) => [...prev, data]);
                setCurrentRepo("");
                return;
            }
        }
    };

    const handleRemoveRepo = (id) => {
        const novaLista = repos.filter((repos) => repos.id !== id);
        setRepos(novaLista);
    };

    return {
        currentRepo,
        setCurrentRepo,
        repos,
        setRepos,
        handleSearchRepo,
        handleRemoveRepo,
    };
};

export default useRepo;
