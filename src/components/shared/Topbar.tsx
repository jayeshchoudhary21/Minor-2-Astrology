import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button';
import LOGO   from '../../../public/assets/images/LOGO.png'
import { useSignOutAccount } from '@/lib/react-query/queriesAndMutations'
import { useEffect } from 'react';
import { useUserContext } from '@/context/AuthContext';
import '../../App.css';
 
 const Topbar = () => {
   const {mutate: signOut, isSuccess } = useSignOutAccount();
   const navigate = useNavigate();
   const { user }  = useUserContext();
   console.log(user)

   useEffect(() =>{
    if(isSuccess) navigate(0);
   },[isSuccess])

    

   return (
    <>

    
     <section className="topbar1"> 
        <div className="flex items-center flex-between py-4 px-5 w-[95vw] mt-9">
         
            <Link to="/" className="flex gap-3 items-center">
                <img 
                 src={LOGO}
                  alt="logo"
                  width={160}
                  height={325} 
                />   
                
            </Link>
            <Link   to="/" style={{color:"rgb(120 120 163 / var(--tw-text-opacity))",fontSize:"18px"}}>Astrology</Link>
            <Link to="/calender" style={{color:"rgb(120 120 163 / var(--tw-text-opacity))",fontSize:"18px"}}>calender</Link>
            <Link to="/guidence" style={{color:"rgb(120 120 163 / var(--tw-text-opacity))",fontSize:"18px"}}>Gudience</Link>
            <div className="flex gap-4">
                <Button variant="ghost" className="shad-button_ghost" onClick={() => signOut()}>
                    <img src="/assets/icons/logout.svg" alt="logout" />
                </Button>
                <Link to={`/profile/${user.id}`} className="flex-center gap-3">
                 <img 
                    src={user.imageUrl || '/assets/icons/profile-placeholder.svg'} 
                    alt="profile" 
                    className='h-10 w-10 rounded-full'/>
                </Link>
            </div>
        </div>
     </section>

     </> 
   )
 }
 
 export default Topbar