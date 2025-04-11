 
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"
import { useToast } from "@/components/ui/use-toast"
import  LOGO  from '../../../public/assets/images/LOGO.png'
 
import { Form, FormControl,  FormField,  FormItem,  FormLabel,  FormMessage, } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SigninValidation  } from "@/lib/validation";
import { z } from "zod";
// import Loader from "@/components/shared/Loader";
import {   useSignInAccount  } from "@/lib/react-query/queriesAndMutations";
import { useUserContext } from "@/context/AuthContext";
import { Loader } from "lucide-react";



const SigninForm = () => {
  const { toast } = useToast();
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();
  const navigate = useNavigate();
   


  const { mutateAsync: signInAccount  } = useSignInAccount();

  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
       
      email: '',
      password: '',
    },
  });

  // Define a submit handler.
  async function onSubmit(values: z.infer<typeof SigninValidation>) {
     const session = await signInAccount({
      email: values.email,
      password: values.password,

     })

     if(!session){
       return   toast({  title: 'Sign up failed. Please try again.'  })
      }

      const isLoggedIn = await checkAuthUser();

      if(isLoggedIn){
        form.reset();

        navigate('/');
      }else{
        return toast({ title: 'Sign up failed. Please try again.'});
      }
     }
  

  return (
    
    <Form {...form}>
          <div className="sm:w-420 flex-center flex-col text-[16px]">
              <img src={LOGO} alt="logo" />
              <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">Log in to your account</h2>
              <p className="text-white text-[17px] small-medium md:base-regular mt-12">Welcome back! Please enter your details</p>
          

            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
               
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel style={{color:" white", fontSize:"16px"}}>Email</FormLabel>
                    <FormControl>
                      <Input style={{color:"rgb(120 120 163)",fontSize:"16px"}} type="email" className="shad-input" {...field} />
                    </FormControl>
                    
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel style={{color:" white", fontSize:"16px"}}>Password:</FormLabel>
                    <FormControl>
                      <Input style={{color:"rgb(120 120 163)",fontSize:"16px"}} type="password" className="shad-input" {...field} />
                    </FormControl>
                     
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="shad-button_primary"> 
              { isUserLoading ? (
                <div className="flex-center gap-2">
                  <Loader /> Loading.....
                </div>
              ):(<div style={{color:" white", fontSize:"16px"}}>Sign in</div>)}
              </Button>
              <p className="text-small-regular text-light-2 text-center mt-2">
                Don't have an account?
                <Link to="/sign-up" style={{color:"rgb(18 245 174)"}} className=" text-small-semi-bold ml-1">Sign up</Link>
              </p>
            </form>
          </div>
    </Form>
     
  );
};

export default SigninForm;



 