export function Repo({ repoData }) {
    const fields = {
        index: repoData.index + 1,
        numberOfStars: new Intl.NumberFormat("NO").format(repoData.watchers_count),
        link: <a href={repoData.html_url}>{repoData.full_name}</a>,
        description: repoData.description,
        tags: repoData.topics.slice(0, 5).join(", "),
    };

    return <tr>
        {Object.values(fields).map(textOrLink => (
            <td title={repoData.description}>{textOrLink}</td>
        ))}
    </tr>;
}