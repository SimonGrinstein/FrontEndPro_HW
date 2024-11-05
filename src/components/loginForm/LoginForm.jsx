import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";

function LoginForm({ name, type, placeholder, label }) {
  return (
    <form action="" method="get">
        <MyInput name={'name'} type={'text'} label={'Login'} placeholder={''} />
        <MyInput name={'email'} type={'email'} label={'Email'} placeholder={'muster@gmail.com'} />
        <MyInput name={'password'} type={'password'} label={'Password'} placeholder={''} />
        <MyButton text={'Submit'} isDanger={false} />
    </form>
  );
}

export default LoginForm;
