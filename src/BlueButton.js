export default function BlueButton ({ children, labelA, labelB }) {
  return <button className='button blue-button'>
    <div>{labelB}</div>


    <div>{labelA}</div>
    {children}
  </button>
}