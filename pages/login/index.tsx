import AuthForm from "@/components/common/AuthForm";

const Login = () => {
  return (
    <section className="flex  items-center justify-center h-screen">
      <AuthForm
        type="login"
        handleOnChange={() => {}}
        error={undefined}
        onSubmit={() => {}}
      />
    </section>
  );
};

export default Login;
