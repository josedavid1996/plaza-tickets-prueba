export function mountInitials(fecha: Date) {
  const meses = {
    1: 'ene',
    2: 'feb',
    3: 'mar',
    4: 'abr',
    5: 'may',
    6: 'jun',
    7: 'jul',
    8: 'ago',
    9: 'sep',
    10: 'oct',
    11: 'nov',
    12: 'dic'
  }
  const mesNumero = fecha.getMonth() + 1
  return meses[mesNumero]
}
