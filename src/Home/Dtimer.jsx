import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Dtimer.css';

const COUNTDOWN_TARGET = new Date("2024-07-25T22:59:59"); //Date

const getTimeLeft = () => {
  const totalTimeLeft = COUNTDOWN_TARGET - new Date();
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);

  return { days, hours, minutes, seconds }; // Return value
};

const Dtimer = () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className='Time'>
        <h2>Diwali Offer</h2>
        <div className='mt-4'>
        <div className='content'>
           {Object.entries(timeLeft).map(el => {
            const label = el[0];
            const value = el[1];
            return (
            <div className='box' key={label}> {/* Added key */}
                <div className='value'>
                   <span>{value}</span>
                </div>
                <div className='label'>
                   <span>{label.charAt(0).toUpperCase() + label.slice(1)}</span> {/* Capitalized label */}
                </div>
            </div>)
           })}
        </div>
    </div>
</div>
  )
}
export default Dtimer;






// import { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import'./Dtimer.css';


// const COUNTDOWN_TARGET= new Date("2024-06-30T 22:59:59");

// const getTimeLeft=()=>{
//     const totalTimeLeft =COUNTDOWN_TARGET - new Date();
//     const days=Math.floor(totalTimeLeft/(1000 *60 *60 * 24));
//     const hours=Math.floor(totalTimeLeft/(1000 *60 *60) % 24);
//     const minutes=Math.floor(totalTimeLeft/(1000 *60) % 60);
//     const seconds=Math.floor(totalTimeLeft/(1000) % 60);

//     return(days,hours,minutes,seconds);
// };
// const Dtimer = () => {
//     const[timeLeft,setTimeLeft]=useState(()=>getTimeLeft());

//     useEffect(()=>{
//        const timer= setInterval (()=>{
//             setTimeLeft(getTimeLeft())
//         },1000);
//         return()=>{
//             clearInterval(timer);
//         };
//     },[]);

//   return (
//     <div className='Time'>
//         <h2>Diwali Offer</h2>
//         <div className='mt-4'>
//         <div className='content'>
//            {Object.entries(timeLeft).map(el=>{
//             const label =el[0];
//             const value =el[1];
//             return(
//             <div className='box' key={label}>
//                 <div className='value'>
//                    <span>{value}</span>
//                 </div>
//                 <span className='label'>
//                    {label}
//                 </span>
//             </div>);
//       })}
//         </div>
//     </div>
// </div>
//   );
// };
// export default Dtimer;