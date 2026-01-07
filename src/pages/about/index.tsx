import { useNavigate } from '@solidjs/router'

export default function AboutIndex() {
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate(-1)}>back</button>
      <div>这里是about index</div>
    </div>
  )
}
