import { memo } from 'react'

import SideBar from '../SideBar/SideBar'
import News from '../News/News'

import WindowSize from '../../utils/useWindowSize'

function Main() {
    const width: number | undefined = WindowSize()
    return (
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
                <News title="Новости" description="Обновление CRM до 1.2" />
            </div>
        </div>
    )
}

export default memo(Main)
