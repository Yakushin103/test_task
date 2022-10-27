import { memo } from 'react'

import UpSVG from '../../Images/up.svg'
import FinanceSVG from '../../Images/finance.svg'
import UserSVG from '../../Images/userSideBar.svg'


interface DropdownProps {
    mobile: boolean,
    active: string,
    name: string,
    pic: string,
    open: boolean,
    setOpen: (open: boolean) => void,
    hundleMenuItem: (name: string) => void
};

const menu = [
    { name: 'Настройка профиля', pic: UserSVG },
    { name: 'Управление финансами', pic: FinanceSVG },
]

function Dropdown({ mobile, active, name, pic, open, setOpen, hundleMenuItem }: DropdownProps) {
    return (
        <div
            onClick={() => setOpen(!open)}
            className="row dropdown"
        >
            <div className="row" >
                <img src={pic} alt={name} title={name} />
                {
                    !mobile &&
                    <p>
                        {name}
                    </p>
                }
            </div>

            <div className="row">
                <img
                    className={open ? "up dropdown" : "down dropdown"}
                    src={UpSVG}
                    alt="up"
                />
            </div>
            {
                open && (
                    <ul>
                        {
                            menu.map((item) => (
                                <li
                                    className={active === item.name ?
                                        "active " : ""
                                    }
                                    onClick={() => {
                                        hundleMenuItem(item.name)
                                    }} key={item.name}>
                                    <div className="row">
                                        <img src={item.pic} alt={item.name} title={item.name} />
                                        {
                                            !mobile &&
                                            <p>
                                                {item.name}
                                            </p>
                                        }
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    )
}

export default memo(Dropdown)
