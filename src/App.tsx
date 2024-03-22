import * as stylex from '@stylexjs/stylex'

const styles = stylex.create({
  main: {
    fontSize: 48,
    fontWeight: 'bold',
  },
})

export const App = () => (
  <main {...stylex.props(styles.main)}>
    Welcome to my awesome App!
    <RejectIcon />
  </main>
)
