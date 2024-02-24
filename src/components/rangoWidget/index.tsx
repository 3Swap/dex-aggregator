import { Widget, WidgetConfig } from "@rango-dev/widget-embedded";
import { useMemo } from "react";

export const App = () => {
    const widgetConfig: WidgetConfig = useMemo(() => ({
        apiKey: '434f57c7-cbc0-475d-ad74-14c2cac64955',
        walletConnectProjectId: 'e24844c5deb5193c1c14840a7af6a40b',
        rateLimitPerSecond: '5',
        title: "3Swap",
        allowedDomains: [
            "http://localhost:3000",
            "https://3swapdex.vefdefi.org/"
        ],
        affiliate: {
            key: "https://rango.vip/a/7wdJAS",
            percent: 8,
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
        typography: {
            body1: {
                color: '#fff',
            },
            body2: {
                color: '#fff',
            },
        }
    }), []);
    
    return (
        <div>
            <Widget config={widgetConfig} />
        </div>
    );
};
