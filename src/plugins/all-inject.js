export default function (ctx, inject) {
  inject('allInject', (string) => {
    console.log('all string', string)
  })
}
