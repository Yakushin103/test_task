import { memo } from 'react'

import SettingsSVG from '../../Images/Vector.svg'
import UserSVG from '../../Images/ic_person.svg'

function Headers() {
    return (
        <div className="header row">
            <div className="header-row settings">
                <img src={SettingsSVG} alt="Settings" />
                <h3>Wrench CRM</h3>
            </div>
            <div className="header-row user">
                <img src={UserSVG} alt="User" />
                <h3>Имя Фамилия</h3>
            </div>
        </div>
    )
}

export default memo(Headers)
