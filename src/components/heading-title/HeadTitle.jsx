const HeadTitle = ({title}) => {
  return (
    <div style={wrapperStyles}>
      <h2 style={titleStyles}>{title}</h2>
      </div>
  )
}
const wrapperStyles={
  marginLeft:'20px',
  marginTop:'5px'
}
const titleStyles={
  color:'var(--primary-color)'
}

export default HeadTitle