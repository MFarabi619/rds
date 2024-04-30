import { Field } from 'formik'
import { fieldStyles } from '../../../styles/form'
import { FormField } from '../FormField/FormField'

export interface InputProps {
  label: string
  hiddenLabel?: boolean
  name: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
  helper?: string
  required?: boolean
  displayError?: boolean
}

export const Input = ({ ...props }: InputProps) => {
  const { name, ...rest } = props

  return (
    <FormField name={name} {...rest}>
      <Field type="text" id={name} name={name} className={`${fieldStyles.input} ${fieldStyles.disabled}`} {...rest} />
    </FormField>
  )
}
