import * as stylex from '@stylexjs/stylex'

export const App = () => {
  return <main {...stylex.props(styles.main)}>Welcome to my awesome App!</main>
}

const styles = stylex.create({
  main: {
    fontSize: 48,
    fontWeight: 'bold',
  },
})
