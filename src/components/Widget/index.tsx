import { LiFiWidget } from '@lifi/widget';
const widgetConfig = {
    containerStyle: {
        border: '1px solid rgb(234, 234, 234)',
        borderRadius: '16px',
    },
    theme: {
        palette: {
            primary: { main: '#7B3FE4' },
            secondary: { main: '#F5B5FF' },
            background: {
                paper: '#000000', // bg color for cards
                default: '#000000', // bg color container
            },
            grey: {
                300: '#000000', // border light theme
                800: '#000000', // border dark theme
            },
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