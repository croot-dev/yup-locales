/*eslint-disable no-template-curly-in-string*/
import { printValue, LocaleObject, bool } from 'yup'

export const mixed: LocaleObject['mixed'] = {
  default: '${path} μη έγκυρο',
  required: '${path} απαιτούμενο πεδίο',
  defined: '${path} πρέπει να καθοριστεί',
  notNull: '${path} δεν μπορεί να είναι μηδενικό',
  oneOf: '${path} πρέπει να είναι μια απο τις παρακάτω τιμές: ${values}',
  notOneOf: "${path} πρέπει να είναι μια απο τις παρακάτω τιμές: ${values}'",
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value
    let msg =
      `${path} πρέπει να είναι  \`${type}\` τύπος, ` +
      `αλλά η τελική τιμή ήταν: \`${printValue(value, true)}\`` +
      (isCast ? ` (μετατροπή από την τιμή \`${printValue(originalValue, true)}\`).` : '.')

    if (value === null) {
      msg += '\n Εάν "null" πρόκειται να είναι κενή τιμή βεβαιωθείτε ότι έχετε σημειώσει το σχήμα ως' + ' `.nullable()`'
    }

    return msg
  },
}
export const string: LocaleObject['string'] = {
  length: '${path}πρέπει να είναι ${length} χαρακτήρες',
  min: '${path} πρέπει να είναι τουλάχιστον ${min} χαρακτήρες',
  max: '${path} πρέπει να είναι τουλάχιστον ${max} χαρακτήρες',
  matches: '${path} πρέπει να συμφωνεί με τα παρακάτω: "${regex}"',
  email: '${path} πρέπει να είναι έγκυρη διεύθυνσηl',
  url: '${path} πρέπει να είναι έγκυρη διεύθυνσηl',
  uuid: '${path} πρέπει να είναι έγκυρο UUID',
  trim: '${path} πρέπει να είναι συμβολοσειρά χωρίς κενά',
  lowercase: '${path} πρέπει να είναι συμβολοσειρά μικρών γραμμάτων',
  uppercase: "${path} πρέπει να είναι συμβολοσειρά κεφαλαίων'",
}
export const number: LocaleObject['number'] = {
  min: '${path} πρέπει να είναι μεγαλύτερο ή ίσο ${min}',
  max: '${path} πρέπει να είναι λιγότερο ή ίσο ${max}',
  lessThan: '${path} πρέπει να είναι λιγότερο απο ${less}',
  moreThan: '${path} πρέπει να είναι περισσότερο απο ${more}',
  positive: '${path} πρέπει να είναι θετική τιμή',
  negative: '${path} πρέπει να είναι αρνητική τιμή',
  integer: '${path} πρέπει να είναι ακέραιος αριθμός',
}
export const date: LocaleObject['date'] = {
  min: '${path} το πεδίο πρέπει να είναι μεταγενέστερο ${min}',
  max: '${path} το πεδίο πρέπει να είναι προγενέστερο ${max}',
}
export const object: LocaleObject['object'] = {
  noUnknown: '${path} το πεδίο περιέχει μη καθορισμένα κλειδιά: ${unknown}',
}
export const array: LocaleObject['array'] = {
  min: '${path} το πεδίο πρέπει να περιέχει τουλάχιστον ${min} στοιχεία',
  max: '${path} tο πεδίο πρέπει να έχει λιγότερα ή ίσα με ${max} στοιχείαs',
  length: '${path} πρέπει να έχει ${length} στοιχεία',
}
export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} το πεδίο πρέπει να είναι ${value}',
}

export const yupLocaleEl = {
  mixed,
  string,
  number,
  date,
  object,
  array,
  boolean,
}
