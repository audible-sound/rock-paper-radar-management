
import MultiForm from "../../../components/Form/MultiForm";

const SignUpPage = () => {
  return (
    //picture
    <div className="w-screen h-screen flex">
      <div className="bg-sign-in-bg w-[55%] h-full bg-cover bg-no-repeat">
        <div className="bg-[rgba(0,0,0,0.55)] w-full h-full p-20">
          <h1 className="text-5xl text-white font-bold capitalize pb-10">Plan your next adventure with us</h1>
          <p className="text-3xl text-white font-light capitalize">discover local hidden gems</p>
        </div>
      </div>
      <MultiForm />
    </div>
  );
};

export default SignUpPage;
