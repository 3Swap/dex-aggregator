import { useEffect } from 'react';
import { useCookie3, useInitUserTracking } from 'src/hooks';
import { AppProvider } from './AppProvider';
import {
  FeatureCards,
  Menus,
  Navbar,
  PoweredBy,
  Snackbar,
  WelcomeScreen,
  Widgets,
} from './components';
import 'styles.css';
import Home3Swap from './components/3Swap/Home3Swap';

export function App() {
  const { initTracking } = useInitUserTracking();
  const cookie3 = useCookie3();

  useEffect(() => {
    initTracking({});
    cookie3?.trackPageView();
  }, [cookie3, initTracking]);

  return (
    <Home3Swap>
      {/* <div> */}
        <AppProvider>
          <Navbar />
          <WelcomeScreen />
          <Menus />
          <Widgets />
          <FeatureCards />
          <PoweredBy />
          <Snackbar />

          {/* <div className=' w-screen h-screen bg-green-500'>
        Hellow
      </div> */}
        </AppProvider>
      {/* </div> */}
    </Home3Swap>
  );
}
