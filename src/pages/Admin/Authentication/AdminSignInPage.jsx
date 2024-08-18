import { FormProvider, useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { useNavigate } from 'react-router-dom';
import mainAxios from '../../../api/mainAxios'
import staffStore from '../../../stores/staffStore';
import Cookies from 'js-cookie'

const AdminSignInPage = () => {
  const signInForm = useForm();
  const signIn = staffStore(state => state.signIn);
  const navigate = useNavigate();
  const onSubmit = async (formData) => {
    try {
      const response = await mainAxios.post('/admin/signin', formData);
      const { data, accessToken } = response.data;
      Cookies.set('token', accessToken, { expires: 30, path: '/' });
      Cookies.set('username', data.username, { expires: 30, path: '/' });
      signIn(data);
      //TODO ADD IF STATEMENT TO CHECK IF USER IS ADMIN OR EMPLOYEE
      //TODO REDIRECT TO ADMIN DASHBOARD IF USER IS ADMIN
      //TODO REDIRECT TO EMPLOYEE DASHBOARD IF USER IS EMPLOYEE
      navigate('/admin/dashboard');
    } catch (error) {
      console.error(error);
    }
  }

  return (
      <div className="w-full h-screen flex items-start">
        {/* side pic */}
        <div className="relative w-full h-full flex flex-col">
          <div className="bg-sign-in-bg w-full h-full bg-cover bg-no-repeat"></div>
        </div>
        {/* login form */}
        <FormProvider {...signInForm}>
          <form className="w-1/2 h-full bg-white flex flex-col p-20 justify-center items-center" onSubmit={signInForm.handleSubmit(onSubmit)}>
            <div className="w-full flex flex-col max-w-[300px]">
              <div className="w-full flex flex-col mb-2">
                <h3 className="text-5xl font-bold mb-4">Employee Login</h3>
                <p className="text-base mb-2">Sign into your employee account</p>
              </div>
              <div className="w-full flex flex-col">
                <div className='flex justify-between w-full mt-2'>
                  <p className="text-base">Username</p>
                  <ErrorMessage errors={signInForm.formState.errors} name="username" as="p" className="text-red-600" />
                </div>
                <input
                  type="username"
                  placeholder="Enter Username"
                  className="pl-2 w-full h-10 text-black py-2 my-2 bg-[#EDE8F5] rounded-md border border-[#7091E6] outline-none focus:border-2"
                  {...signInForm.register("username", { required: "*required" })}
                />
                <div className='flex justify-between w-full mt-2'>
                  <p className="text-base">Password</p>
                  <ErrorMessage errors={signInForm.formState.errors} name="password" as="p" className="text-red-600" />
                </div>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="pl-2 w-full h-10 text-black py-2 my-2 bg-[#EDE8F5] rounded-md border border-[#7091E6] outline-none focus:border-2"
                  {...signInForm.register("password", { required: "required" })}
                />
              </div>
              <div className="w-full flex flex-col my-6">
                <button type='submit' className="w-full text-white my-2 bg-[#7091E6] font-semibold rounded-md p-2 text-center flex items-center justify-center cursor-pointer hover:bg-[#7091E6] active:bg-violet-700 focus:outline-none">
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
  );
};

export default AdminSignInPage;
