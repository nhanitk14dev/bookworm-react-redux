import { SectionContainer } from "../../styles/commonStyles";
import { useRef, useEffect, useState } from "react";
import ForwardRefInputComponent from "../../components/ForwardRefInputComponent";

const UseRefHook = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const previousInputValue = useRef<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const inputForwardRef = useRef<HTMLInputElement>(null);

  // Case set auto input when loaded page
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const focusInputForwardRef = () => {
    inputForwardRef.current?.focus();
  };

  return (
    <SectionContainer>
      <h2>useRef(initialValue) & forwardRef(render)</h2>
      <ul>
        <li>
          useRef is a React Hook that lets you reference a value that’s not
          needed for rendering. A way to access the DOM Node or React Element
          Created
        </li>
        <li>
          forwardRef lets your component expose a DOM node to parent component
          with a ref
        </li>
      </ul>
      <div>
        <h4>We set input auto focus</h4>
        <input
          type="text"
          placeholder="Input focus"
          ref={inputRef}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div>
          <p>Current Value: {inputValue}</p>
          <p>Previous Value: {previousInputValue.current}</p>
        </div>
        <button onClick={focusInput}>Focus Input</button>
      </div>
      <hr />
      <ForwardRefInputComponent
        label="Input Focus Forward Ref"
        ref={inputForwardRef}
      ></ForwardRefInputComponent>
      <button onClick={focusInputForwardRef}>Click To Focus</button>
    </SectionContainer>
  );
};

export default UseRefHook;
