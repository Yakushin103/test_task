import { memo, useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";

import Dropdown from './Dropdown'

import HomeSVG from '../../Images/home.svg'
import SearchSVG from '../../Images/search.svg'
import TableSVG from '../../Images/table.svg'
import CalendareSVG from '../../Images/calendare.svg'
import MapsSVG from '../../Images/maps.svg'
import VidjetSVG from '../../Images/vidjet.svg'
import SettingsSVG from '../../Images/settings.svg'
import LogoutSVG from '../../Images/logout.svg'

interface SideBarProps {
    mobile: boolean
};

const menu = [
    { name: 'Главная', pic: HomeSVG },
    { name: 'Поиск адресов', pic: SearchSVG },
    { name: 'Таблицы', pic: TableSVG },
    { name: 'Календарь', pic: CalendareSVG },
    { name: 'Карты', pic: MapsSVG },
    { name: 'Виджеты', pic: VidjetSVG },
    { name: 'Настройки', pic: SettingsSVG },
    { name: 'Выход', pic: LogoutSVG },
]

function SideBar({ mobile }: SideBarProps) {
    const navigate = useNavigate();
    const location = useLocation();

    const [active, setActive] = useState(location.pathname === '/address' ? 'Поиск адресов' : 'Главная')
    const [open, setOpen] = useState(false)


    function hundleMenuItem(name: string) {
        if (name !== 'Настройки') {
            setActive(name)
        }
        if (name === 'Главная') {
            navigate("/");
        }
        if (name === 'Поиск адресов') {
            navigate("/address");
        }
    }

    return (
        <div>
            <p className="title">Меню</p>
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
                            {
                                item.name === 'Настройки' ?
                                    <Dropdown
                                        mobile={mobile}
                                        active={active}
                                        name={item.name}
                                        pic={item.pic}
                                        open={open}
                                        setOpen={setOpen}
                                        hundleMenuItem={hundleMenuItem}
                                    /> :
                                    <div className="row">
                                        <img src={item.pic} alt={item.name} title={item.name} />
                                        {
                                            !mobile &&
                                            <p>
                                                {item.name}
                                            </p>
                                        }
                                    </div>
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default memo(SideBar)
