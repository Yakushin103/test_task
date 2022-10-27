import { memo, useState } from 'react'

import SearchInput from './SearchInput'
import SearchButton from './SearchButton'
import SearchTable from './SearchTable'

import './SearchAddress.scss'

interface SearchAddressProps {
  title: string,
  description: string
};

// interface OptionsProps {
//   method: string,
//   mode: string,
//   headers: {
//     "Content-Type": string;
//     Accept: string;
//     Authorization: string;
//   },
//   body: string,
// };

interface ResultProps {
  value: string,
  unrestricted_value: string,
  data: any
}

type AddressProps = string
type AddressDataProps = [] | string[]

function SearchAddress({ title, description }: SearchAddressProps) {
  const [address, setAddress] = useState<AddressProps>('')
  const [adressData, setAdressData] = useState<AddressDataProps>([])

  function handleSearch() {
    const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    const token = "376965f1543c9fcb3e52568e1bbf01d02731c24e";
    const query = address;

    const options: any = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
      },
      body: JSON.stringify({ query: query })
    }

    fetch(url, options)
      .then(response => response.text())
      .then((result: any) => {
        if (Object.keys(result).length) {
          setAdressData(JSON.parse(result).suggestions.map((item: ResultProps) => item.value))
        } else {
          setAdressData([])
        }
      })
      .catch(error => console.log("error", error));

  }
  return (
    <div className="search">
      <h2> {title} </h2>
      <h6> {description} </h6>

      <div className="search-action">
        <SearchInput
          address={address} setAddress={setAddress}
        />

        <SearchButton
          handleSearch={handleSearch}
          disabled={address === '' && address.length < 3}
        />
      </div>

      {
        !!adressData.length &&
        <div className="search-table">
          <SearchTable data={adressData} />
        </div>
      }
    </div>
  )
}

export default memo(SearchAddress)
