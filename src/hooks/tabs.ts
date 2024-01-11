import { useEffect, useState } from "react"
import { LiFiWidgetNext } from "@/routes/dex"
import { Oramper } from "@/components/Oramper"
import { Staking } from "@/components/Staking"

enum Route {
    LIFI = 'exchange',
    ORAMPER = 'oramper',
    STAKING = 'staking-pool'
}

export const useTabRerouter = (routes: Route) => {
    const [component, setComponent] = useState(() => LiFiWidgetNext)

    useEffect(() => {
        switch (routes) {
            case Route.LIFI:
                setComponent(() => LiFiWidgetNext);
                break;
            case Route.ORAMPER:
                setComponent(() => Oramper);
                break;
            case Route.STAKING:
                setComponent(() => Staking);
                break;
            default:
                setComponent(() => LiFiWidgetNext);
                break;
        }
    }, [routes])


    return component;
}