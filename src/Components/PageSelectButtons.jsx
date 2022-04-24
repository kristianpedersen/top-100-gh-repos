export function PageSelectButtons(props) {
    const {
        currentPageNumber,
        numberOfPages,
        topOrBottom,
        reposPerPage,
        setCurrentPageNumber,
    } = props;

    const pageNumbers = [...Array(numberOfPages)].map((_, index) => index); // [0, 1, 2, ...]

    const propsFromPageNumber = pageNumber => {
        // The top and bottom button rows need separate IDs and names.
        // If not, only one of the top/bottom buttons is displayed as checked.
        return {
            checked: pageNumber === currentPageNumber,
            id: `page-${pageNumber}-${topOrBottom}`,
            name: `page-buttons-${topOrBottom}`,
            onChange: () => setCurrentPageNumber(pageNumber),
            type: "radio",
            value: pageNumber,
        }
    }

    return <form>
        {pageNumbers.map(pageNumber => {
            const labelAndInputProps = propsFromPageNumber(pageNumber);
            const range = {
                start: pageNumber * reposPerPage + 1,
                end: pageNumber * reposPerPage + reposPerPage
            };

            return (
                <label htmlFor={labelAndInputProps.id}>
                    <input {...labelAndInputProps} /> {range.start} - {range.end}
                </label>
            );
        })}
    </form>
}