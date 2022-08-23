export function validadeEmptyAndLength3 (value) {
  if (!value) {
    return '* Esse campo é obrigatório '
  }

  if (value.length < 3) {
    return '* Esse campo precisa ser maior que 3 caracteres'
  }

  return true
}

export function validadeEmptyAndEmail (value) {
  if (!value) {
    return '* Esse campo é obrigatório '
  }

  const regexEmailValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(value)

  if (!regexEmailValid) {
    return '*Esse campo precisa ser um email'
  }

  return true
}
