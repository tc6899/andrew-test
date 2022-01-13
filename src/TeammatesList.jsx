import TeammateItem from './TeammateItem'

export default function TeammatesList ({ student }) {
  const teammatesItems = student.teammates?.map((id) => {
    const item = <TeammateItem student={student} id={id} key={id} />

    return item
  })


  return <ul>{teammatesItems}</ul>
}