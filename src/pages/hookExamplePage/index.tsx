import { Main } from "../homePage/Home.style";
import UseCallbackHook from "./UseCallbackHook";
import UseRefHook from "./UseRefHook";
import UseDeferredValue from './UseDeferredValue';

const HookExample = () => {
  return (
    <>
      <Main>
        <div className="container">
          <h1 className="text-center">Hooks Examples Page</h1>
          <UseCallbackHook />
          <UseRefHook />
          <UseDeferredValue />
        </div>
      </Main>
    </>
  );
};

export default HookExample;
