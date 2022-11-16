import { FallbackProps } from 'react-error-boundary'

const ErrorFallback = ({error, resetErrorBoundary}: FallbackProps) => {
  console.log(error)
  return (
    <div role="alert" className="error-content">
      <p>Oh no!! Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

export default ErrorFallback;