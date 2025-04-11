 
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"
import { useToast } from "@/components/ui/use-toast"
 
import { Form, FormControl,  FormField,  FormItem,  FormLabel,  FormMessage, } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignupValidation } from "@/lib/validation";
import  LOGO  from '../../../public/assets/images/LOGO.png'

import { z } from "zod";
// import Loader from "@/components/shared/Loader";
import { useCreateUserAccount, useSignInAccount  } from "@/lib/react-query/queriesAndMutations";
import { useUserContext } from "@/context/AuthContext";
import { Loader } from "lucide-react";



const SignupForm = () => {
  const { toast } = useToast();
  const { checkAuthUser  } = useUserContext();
  const navigate = useNavigate();
   

  const { mutateAsync: createUserAccount, isLoading: isCreatingAccount} = useCreateUserAccount();

  const { mutateAsync: signInAccount } = useSignInAccount();

  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',
    },
  });

  // Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignupValidation>) {
     console.log('Form Values:', values);
     const newUser = await createUserAccount(values);
      

     if(!newUser){
      return   toast({
          title: 'Sign up failed. Please try again.'})
     }

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
              <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">Create a new account</h2>
              <p className="text-white text-[17px] md:base-regular mt-12">To use Astro World, please enter your account details</p>
          

            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel style={{color:" white", fontSize:"16px"}}>Name</FormLabel>
                    <FormControl>
                      <Input style={{color:"rgb(120 120 163)",fontSize:"16px"}} type="text" className="shad-input" {...field} />
                    </FormControl>
                    
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel style={{color:" white", fontSize:"16px"}}>Username</FormLabel>
                    <FormControl>
                      <Input style={{color:"rgb(120 120 163 )",fontSize:"16px"}} type="text" className="shad-input" {...field} />
                    </FormControl>
                     
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel style={{color:" white", fontSize:"16px"}}>Email</FormLabel>
                    <FormControl>
                      <Input style={{color:"rgb(120 120 163  )",fontSize:"16px"}} type="email" className="shad-input" {...field} />
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
                      <Input style={{color:"rgb(120 120 163  )",fontSize:"16px"}} type="password" className="shad-input" {...field} />
                    </FormControl>
                     
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="shad-button_primary"> 
              {isCreatingAccount ? (
                <div className="flex-center gap-2">
                  <Loader /> Loading.....
                </div>
              ):(<div style={{color:" white", fontSize:"16px"}}>Sign up</div>)}
              </Button>
              <p className="text-small-regular text-light-2 text-center mt-2">
                Already have an account?
                <Link to="/sign-in" style={{color:"rgb(18 245 174)"}} className=" text-small-semi-bold ml-1">Log in</Link>
              </p>
            </form>
          </div>
    </Form>
     
  );
};

export default SignupForm;



 