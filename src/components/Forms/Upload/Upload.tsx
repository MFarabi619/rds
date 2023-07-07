import { Field, useField } from 'formik'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'
import { formStyles, formErrorStyles } from '../../../utils/formClasses'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export interface UploadProps {
  label?: string
  name: string
  type?: string
  setPreview?: any
  onReset?: any
  onUpload?: any
  onValidate?: any
  condition?: () => boolean
}

export const Upload = ({ label, onReset, onUpload, onValidate, setPreview, condition = () => true, ...props }: any) => {
  const [field, meta, helpers] = useField(props.name)
  const [imageCheck, setImageCheck] = useState<string>()

  // image types
  const imageMimeType = /image\/(png|jpg|jpeg)/i

  const imagePreview = async (event: any) => {
    const file = event.target.files[0]
    let fileExists = false
    let isImage = false

    if (!file) {
      helpers.setValue(undefined)
      setPreview(null)
      return
    }

    // check if file exists
    if (file) {
      fileExists = true
    }

    // check if file is an image
    if (file.type.startsWith('image/')) {
      isImage = true
    }

    // read file
    const fileReader = new FileReader()
    const validateImage = new Image()

    fileReader.readAsDataURL(file)
    fileReader.onloadend = (e) => {
      if (file.type.match(imageMimeType)) {
        validateImage.src = `${e.target?.result}`
        validateImage.onload = async () => {
          // validate file
          const failed = onValidate(validateImage, fileExists, isImage)
          setImageCheck('')
          if (failed) {
            setImageCheck(failed.error)
            return
          }
          helpers.setValue(await onUpload(file))
          setPreview(e.target?.result)
        }
      } else {
        // validate non-image file
        const failed = onValidate(file, fileExists, isImage)
        setImageCheck('')
        if (failed) {
          setImageCheck(failed.error)
          return
        }
        helpers.setValue(onUpload(file))
      }
    }
  }

  // upload reset
  const inputReset = () => {
    onReset(meta.value)
    setPreview(null)
    setImageCheck('')
    helpers.setValue('')
  }

  return (
    <>
      {condition() && (
        <div className={`cu-formupload ${formStyles.elementSpace}`}>
          <label htmlFor={field.name} className={formStyles.label}>
            {label} {props.required && <span className="text-cu-red">*</span>}
          </label>

          <div className="flex">
            {/* Input Field  */}
            <Field
              field={field}
              id={field.name}
              component={UploadField}
              onChange={imagePreview}
              className={`${formStyles.input} ${
                meta.touched && meta.error ? formErrorStyles.inputBorder : ''
              } text-transparent`}
              aria-invalid={meta.touched && meta.error ? true : false}
              aria-describedby={field.name + (meta.touched && meta.error ? '-error' : '')}
            />
            <button
              type="button"
              onClick={inputReset}
              className="font-semibol relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm"
            >
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* Validation Error Icon*/}
          {meta.error && meta.touched && (
            <div className={formErrorStyles.messageDiv}>
              <ExclamationCircleIcon className={formErrorStyles.errorIcon} aria-hidden="true" />
              <p className={formErrorStyles.errorText} id={field.name + '-error'}>
                {meta.error}
              </p>
            </div>
          )}
          {imageCheck && (
            <div className={formErrorStyles.messageDiv}>
              <ExclamationCircleIcon className={formErrorStyles.errorIcon} aria-hidden="true" />
              <p className={formErrorStyles.errorText} id={field.name + '-error'}>
                {imageCheck}
              </p>
            </div>
          )}
        </div>
      )}
    </>
  )
}

const UploadField = ({ label, ...props }: any) => {
  return (
    <>
      <Field variant="outlined" name="uploader" title={label} type={'file'} {...props} />
    </>
  )
}

Upload.displayName = 'Form.Upload'