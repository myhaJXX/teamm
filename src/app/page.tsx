import ReduxProvider from '@/store/ReduxProvider';
import Comp from './comp';
import Comp2 from './comp2';

export default function Home() {
  return (
    <ReduxProvider>
      <Comp />
      <Comp2 />
    </ReduxProvider>
  );
}
