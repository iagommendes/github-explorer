interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        url: string;
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            <strong>{props.repository?.name}</strong>
            <p>{props.repository?.description}</p>
            <a href={props.repository?.url}>Acessar repo</a>
        </li>
    );
}