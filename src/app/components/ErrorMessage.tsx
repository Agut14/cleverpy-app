
interface ErrorMessageProps {
    errorMsg?: string
}

export const ErrorMessage = ( { errorMsg }: ErrorMessageProps ) => {
  return (
    <div className="error-message">Error: { errorMsg }</div>
  )
}
