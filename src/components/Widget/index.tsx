import { LiFiWidget, WidgetConfig } from '@lifi/widget';

const widgetConfig: WidgetConfig = {
    variant: 'expandable',
    integrator: '3swap',
    containerStyle: {
        borderRadius: '16px',
        boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.08)',
    },
    theme: {
        palette: {
            primary: { main: '#1E1E1E' },
            secondary: { main: '#F5B5FF' },
            background: {
                paper: '#6366F1', // bg color for cards
                default: '#6366F1', // bg color container
            },
        },
        typography: {
            body1: {
                color: '#fff'
            }
        },
    },
};

export const Widget = () => {
    return (
        <LiFiWidget
            config={widgetConfig}
            integrator="nextjs-example"
        />
    );
};