export default function Layout(props: any) {
  return (
    <div>
      <header>这是header</header>
      <div>{props.children}</div>
      <footer>这是footer</footer>
    </div>
  )
}
