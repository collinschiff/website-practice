import SignInForm from '../../../../personal-project/app/components/SignInForm'

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Sign In</h1>
      <SignInForm />
    </div>
  )
}
