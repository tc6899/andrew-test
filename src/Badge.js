export default function Badge ({ id }) {
  if (id) {
    return <>(ID number: <button>{id}</button>)</>
  }

  return <></>
}