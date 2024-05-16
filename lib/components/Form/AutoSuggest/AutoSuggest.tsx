import { useField, useFormikContext } from 'formik'
import Select from 'react-select'
import './style.css'
import { FormField } from '../FormField/FormField'

interface Option {
  value: string
  label: string
}

export interface AutoSuggestProps {
  label: string
  name: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
  helper?: string
  required?: boolean
  options?: Option[]
  disabled?: boolean
}

export const AutoSuggest = ({ ...props }: AutoSuggestProps) => {
  const { name, options, disabled = false, required, ...rest } = props
  const [field] = useField(name)
  const { setFieldValue } = useFormikContext<unknown>()

  return (
    <FormField name={name} required={required} {...rest}>
      <Select
        {...rest}
        inputId={name}
        options={options}
        value={options?.find((option) => option.value === field.value)}
        onChange={(option: Option | null) => setFieldValue(name, option?.value)}
        onBlur={field.onBlur}
        isSearchable={true}
        isClearable={true}
        isDisabled={disabled}
        className="cu-autosuggest"
      />
    </FormField>
  )
}

export default AutoSuggest