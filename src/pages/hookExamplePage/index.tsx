import { Main } from "../homePage/Home.style";
import UseCallbackHook from "./UseCallbackHook";

const HookExample = () => {
  return (
    <>
      <Main>
        <div className="container">
          <h1 className="text-center">Hooks Examples Page</h1>
          <UseCallbackHook />
        </div>
      </Main>
    </>
  );
};

export default HookExample;
