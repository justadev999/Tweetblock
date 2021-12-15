export const assignClassToInput = (input : any) => {
  const validInput = `${input}.emailIsValid`
  if(validInput) return 'styles.valid'
  if(!validInput) return 'styles.invalid'
}