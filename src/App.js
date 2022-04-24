import './App.css';
import { PageSelectButtons } from "./Components/PageSelectButtons";
import { Repo } from "./Components/Repo";
import { useEffect, useState } from "react";

const top100GitHubReposURL = "https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100";
const reposPerPage = 20;
const numberOfPages = 5;

function App() {
	const [currentPageNumber, setCurrentPageNumber] = useState(0);
	const [loading, setLoading] = useState(true);
	const [topRepos, setTopRepos] = useState();

	useEffect(() => {
		(async function fetchTop100GitHubRepos() {
			const data = await fetch(top100GitHubReposURL);
			const json = await data.json();
			setTopRepos(json.items.map((repo, index) => ({ ...repo, index })));
			setLoading(false);
		})();
	}, []);

	const sliceRange = {
		start: currentPageNumber * reposPerPage,
		end: currentPageNumber * reposPerPage + reposPerPage,
	};

	const tableHeaders = [
		"Rank",
		"Stars",
		"Link",
		"Description",
		"Tags",
	];

	const pageSelectButtonsProps = {
		currentPageNumber, setCurrentPageNumber,
		numberOfPages,
		reposPerPage
	};

	const topButtonsProps = {
		...pageSelectButtonsProps,
		topOrBottom: "top"
	};

	const bottomButtonsProps = {
		...pageSelectButtonsProps,
		topOrBottom: "bottom"
	};

	return (
		<div className="App">
			{loading
				? "Getting repos from GitHub ..."
				: <>
					<h1>The 100 most popular repositories on GitHub</h1>

					{<PageSelectButtons {...topButtonsProps} />}

					<table>
						<tr>{tableHeaders.map(text => <th>{text}</th>)}</tr>
						{topRepos
							.slice(sliceRange.start, sliceRange.end)
							.map(repoData => <Repo repoData={repoData} />)
						}
					</table>

					{<PageSelectButtons {...bottomButtonsProps} />}
				</>
			}
		</div>
	);
}

export default App;