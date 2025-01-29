import { ref } from 'vue'

type CounterProps = {
  initial: number
}

export function Counter(props: CounterProps) {
  const count = ref(props.initial)

  const inc = () => {
    count.value++
  }

  return vine`
    <button @click="inc">{{ count }}</button>
`
}
