export default function ({ app }) {
  app.$myCtxInject = (string) => {
    console.log('ctx string', string)
  }
}
