export default function Badge ({ id }) {
  if (id) {
    return <>
      (ID number: <button className='button'>{id}</button>)
    </>
  }

  return <></>
}