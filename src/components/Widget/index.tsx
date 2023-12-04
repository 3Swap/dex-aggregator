import { LiFiWidget, WidgetConfig } from '@lifi/widget';
import { useMemo } from 'react';

export const Widget = () => {
    const widgetConfig: WidgetConfig = useMemo(() => ({
        variant: 'expandable',
        integrator: '3swap',
        containerStyle: {
            borderRadius: '30px',
            boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.08)',
        },
        theme: {
            palette: {
                primary: { main: '#fff' },
                secondary: { main: '#FFF' },
                background: {
                    paper: '#6365f1a3', // bg color for cards
                    default: '#4F46E5', // bg color container
                },
                text:{
                    primary:'#fff',
                    secondary:"#fff",
                    disabled:'#fff',
                },
                grey:{
                    50: '#f5f5f5',
                    100: '#eeeeee',
                    200: '#d4d4d4',
                    300: '#bdbdbd',
                    400: '#9e9e9e',
                    500: '#757575', // Customize this line for the main grey color
                    600: '#fff',
                    700: '#424242',
                    800: '#303030',
                    900: '#212121',
                }
            },
            shape: {
                borderRadius: 16,
                borderRadiusSecondary: 10,
            },
            typography: {
                body1: {
                    color: '#fff',
                },
                body2: {
                    color: '#fff',
                },
                subtitle1: {
                    color: "#fff",
                },
                subtitle2: {
                    color: "#fff"
                },
            }
        },
        appearance: 'dark',
        fee: 0.03
    }), []);

    return (
        <LiFiWidget
            config={widgetConfig}
            integrator="nextjs-example"
        />
    );
};