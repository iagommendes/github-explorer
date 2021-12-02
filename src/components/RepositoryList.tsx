import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

interface Repository{
    name: string;
    description: string;
    url: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/iagommendes/repos')
            .then(response => response.json())
            .then(data => setRepositories(data));
            console.log(repositories);
    }, []);

    return (
        <section className="repository-list">
            <h1>Repositories</h1>

            <ul>
                {repositories.map(repository => (
                    <RepositoryItem key={repository.name} repository={repository} />
                ))}
            </ul>
        </section>
        );
}
