import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { UserRegister } from '../Types/UserRegister.ts'
import GInputs from '@/components/GInput/GInputs.ts'
import GButton from '@/components/GInput/components/GButton.tsx'
import FormLayout from '@/components/Layout/FormLayout.tsx'
import { yupResolver } from '@hookform/resolvers/yup'
import { UserRegisterSchema } from '../validation/UserRegisterSchema.js'
import { useRegisterUser } from '@/features/SignUp/hooks/useRegisterUser.ts'
import { RoutesEnum } from '@/enums/routesEnum.ts'
import { handleError } from '@/utils/handleError.ts'

const SignUp = () => {
  const { isLoading, success, error, setError, callRegisterUser } = useRegisterUser()

  const { handleSubmit, control } = useForm<UserRegister>({
    resolver: yupResolver(UserRegisterSchema),
  })

  const onSubmit: SubmitHandler<UserRegister> = (data) => {
    callRegisterUser(data)
  }

  useEffect(() => {
    if (error) {
      handleError(error)
      setError(null)
    }
  }, [error])

  useEffect(() => {
    if (success) {
      window.location.href = RoutesEnum.MAIN
    }
  }, [success])

  return (
    <FormLayout
      isLoading={isLoading}
      className="-translate-y-[10%]"
      onFinish={handleSubmit(onSubmit)}
    >
      <GInputs.Text placeholder="Имя" name="first_name" label="Имя" control={control} />

      <GInputs.Text placeholder="Фамилия" name="last_name" label="Фамилия" control={control} />

      <GInputs.Text placeholder="Email" name="email" label="Email" control={control} />

      <GInputs.Password placeholder="Пароль" name="password" label="Пароль" control={control} />

      <GInputs.Password
        placeholder="Повторите Пароль"
        name="passwordConfirmation"
        label="Повторите Пароль"
        control={control}
      />

      <GButton className="h-10 text-lg mt-2" text="Регистрация" />
    </FormLayout>
  )
}

export default SignUp
