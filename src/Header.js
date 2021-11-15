import Badge from './Badge'

export default function Header ({ user, message }) {
  const badge = <Badge id={user.id} />

  return <header>
    <h1>Welcome {user.name} {badge}! {message}.</h1>
  </header>
}