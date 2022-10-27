import { memo } from 'react'

import SearchSVG from '../../Images/searchButton.svg'

interface SearchButtonProps {
    handleSearch: () => void,
    disabled: boolean
};

function SearchButton({ handleSearch, disabled }: SearchButtonProps) {
    return (
        <button
            onClick={handleSearch}
            disabled={disabled}
        >
            <div className="search-button">
                <img src={SearchSVG} alt="Search" />
                <p>Поиск</p>
            </div>
        </button>
    )
}

export default memo(SearchButton)
