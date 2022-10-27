import { memo } from 'react'

function SearchTable({ data }: any) {
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        <p>
                            Адреса
                        </p>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((address: string) => (
                        <tr key={address}>
                            <td>
                                <a href={`mailto:abc@example.com?subject = Feedback&body = ${address}`}>
                                    {address}
                                </a>
                                {/* <p>
                                    {address}
                                </p> */}
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default memo(SearchTable)
