import styled from "styled-components";
import { useRouteError } from "react-router-dom";

const PageContainer = styled.div`
  text-align: center;
  height: 200px;
  padding: 50px 0;
`;

export default function RootErrorBoundary() {
  const error = useRouteError() as Error;
  console.log(error);
  return (
    <PageContainer id="error-page">
      <h2>Oops!</h2>
      <pre>
        <i>{error.message || JSON.stringify(error)}</i>
      </pre>
      <button onClick={() => (window.location.href = "/")}>Click here to reload the app</button>
    </PageContainer>
  );
}