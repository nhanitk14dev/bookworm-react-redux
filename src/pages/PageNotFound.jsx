import styled from "styled-components";

const PageContainer = styled.div`
  text-align: center;
  height: 200px;
  padding: 50px 0;
`;

const PageNotFound = () => {
  return (
    <>
      <PageContainer>
        <h2>Page Not Found !!!</h2>
      </PageContainer>
    </>
  );
}

export default PageNotFound;