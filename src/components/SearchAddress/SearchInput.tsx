import { memo } from 'react'

interface SearchAddressProps {
    address: string,
    setAddress: (value: string) => void
};

function SearchInput({ address, setAddress }: SearchAddressProps) {
    return (
        <input
            placeholder='Введите интересующий вас адрес'
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            // minLength="3"
        />
    )
}

export default memo(SearchInput)
