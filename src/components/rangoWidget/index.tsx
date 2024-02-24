import { Widget, WidgetConfig } from "@rango-dev/widget-embedded";
import { useMemo } from "react";

export const App = () => {
    const widgetConfig: WidgetConfig = useMemo(() => ({
        apiKey: 'c6381a79-2817-4602-83bf-6a641a409e32',
        walletConnectProjectId: 'e24844c5deb5193c1c14840a7af6a40b',
        title: "3Swap",
        affiliate: {
            key: "https://rango.vip/a/7wdJAS",
            percent: 0.8,
        },
        theme: {
            mode: 'dark',
            colors: {
                dark: {
                    neutral: '#6365f1a3',
                    primary: '#FFF',
                    secondary: '#FFF',
                    background: '#4F46E5',
                    foreground: '#fff',
                    info: '#fff'
                },
                light: {
                    primary: '#1C3CF1',
                    secondary: '#469BF5',
                    neutral: '#FFF',
                    background: '#FDFDFD',
                    foreground: '#010101',
                    info: '#5BABFF'
                },
            },
            borderRadius: 18,
            secondaryBorderRadius: 30,
        },
    }), []);
    
    return (
        <div>
            <Widget config={widgetConfig} />
        </div>
    );
};
