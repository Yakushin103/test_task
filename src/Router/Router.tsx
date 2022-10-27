import { lazy } from 'react'
import { Route, Routes } from "react-router-dom"

import Headers from '../components/Headers/Headers'
import SideBar from '../components/SideBar/SideBar'

import lazyWrapper from "../utils/HOK/lazyWrapper"
import WindowSize from '../utils/useWindowSize'

const News = lazyWrapper(lazy(() => import("../components/News/News")))
const SearchAddress = lazyWrapper(lazy(() => import("../components/SearchAddress/SearchAddress")))

export default function Router() {
    const width: number | undefined = WindowSize()

    return (
        <div className="App">
            <Headers />
            <div className="main">
                <div
                    className="side-bar"
                    style={{ width: width && width <= 768 ? '100px' : '300px' }}
                >
                    <SideBar
                        mobile={width && width <= 768 ? true : false}
                    />
                </div>
                <div
                    className="main-content"
                    style={{ width: width && width <= 768 ? 'calc(100% - 100px)' : 'calc(100% - 300px)' }}
                >
                    <Routes>
                        <Route path="/" element={<News
                            title="Новости"
                            description="Обновление CRM до 1.2"
                        />}
                        />
                        <Route path="/address" element={<SearchAddress
                            title="Поиск адресов"
                            description="Введите интересующий вас адрес"
                        />}
                        />
                    </Routes>
                </div>
            </div>
        </div>
    )
}
