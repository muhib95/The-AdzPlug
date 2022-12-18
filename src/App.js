// import logo from './logo.svg';
import './App.css';
import { BsListCheck} from 'react-icons/bs';
import {AiOutlineGift } from 'react-icons/ai';
import {AiOutlineMenu } from 'react-icons/ai';
import img from './acc/my port.jpg'

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
<div className='flex bg-white items-center'>  <label htmlFor="my-drawer" className="drawer-button"><AiOutlineMenu ></AiOutlineMenu></label>
  <h2 > Home</h2></div>
  <div className='grid grid-cols-3 md:gap-3 gap-[406px] justify-center overflow-y-hidden bg-white p-4'>
  <div className="card w-96 bg-gradient-to-r from-purple-900 to-purple-300 shadow-xl">
  <div className="card-body flex-row">
    <div>
    <h2 className="card-title">Daily Reward</h2>
    <p>Log in daily to claim free coins!</p>
    <h3 className='bg-purple-600 w-24 '>CLAIM PRIZE</h3>
    </div>

    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-gradient-to-r from-purple-900 to-purple-300 shadow-xl">
  <div className="card-body flex-row">
    <div>
    <h2 className="card-title">Spin and Win</h2>
  
  <p>Spin the wheel of rewards and win big!</p>
   <h4 className='bg-purple-600 w-2/3'>SPIN THE WHEEL</h4>
    </div>
  
  
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
   
   
  </div>
</div>
<div className="card w-96 bg-gradient-to-r from-purple-900 to-purple-300 shadow-xl">
  <div className="card-body flex-row">
    <div>
    <h2 className="card-title">Challenges</h2>
    <p>Complete challenges to earn extra rewards.</p>
    <h4 className='bg-purple-600 w-2/3'>SEE CHALLENGES</h4>
    </div>
   
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  </div>
  <div className='my-6 grid sm:grid-cols-1 md:grid md:grid-cols-3 justify-center gap-3 '>
  <div className="card w-96 bg-gradient-to-r from-white to-blue-400 shadow-xl">
  <div className="card-body flex-row ">
    <div>
    <h2 className="card-title">Task Offers</h2>
    <p>Complete task to get coins</p>
    </div>
  
   <div>
   <BsListCheck className='text-4xl'></BsListCheck>
   </div>
  </div>
</div>
<div className="card w-96 bg-gradient-to-r from-white to-green-300 shadow-xl">
  <div className="card-body flex-row">
    <div>
    <h2 className="card-title">Buzz Offers</h2>
    <p>Complete buzz offers to get coins</p>
    </div>
 
   <div>
   <AiOutlineGift className='text-4xl'></AiOutlineGift>
   </div>
  </div>
</div>
<div className="card w-96 bg-gradient-to-r from-white to-orange-700 shadow-xl">
  <div className="card-body flex-row ">
    <div>
    <h2 className="card-title">Limited offer</h2>
    <p>complete offers to get coins.</p>

    </div>

    <div>
   <BsListCheck className='text-4xl'></BsListCheck>
   </div>
  </div>
</div>

  </div>
  <div>
  <div className='my-6 grid grid-cols-2 justify-center '>
  <div className="card sm:w-48 md:w-96 bg-gradient-to-r from-white to-blue-400 shadow-xl mx-auto ">
  <div className="card-body">
    <h2 className="card-title justify-center">Adscend offer</h2>
   
  </div>
</div>

<div className="card sm:w-48 md:w-96 bg-gradient-to-r from-white to-orange-700 shadow-xl mx-auto mt-4 ">
  <div className="card-body">
    <h2 className="card-title justify-center">Adgate offer</h2>
    
    
  </div>
</div>

  </div>
  </div>
    
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 bg-white text-base-content">
      <li><div className="avatar">
  <div className="w-24 rounded-full">
    <img src={img} alt=''></img>
  </div>
</div></li>
<li>muhibbulhasan6@gmail.com</li>
      <li>Redeem</li>
      <li>Tranctions</li>
      <li>Invite a Friend</li>
      <li>Rate US</li>
      <li>Help & Support</li>
      <li>Privacy Policy</li>
      
    </ul>
  </div>
</div>
     <footer className='bg-fuchsia-800 p-4'>
      <div>
      <p>Footer</p>
      </div>

     </footer>
    </div>
  );
}

export default App;
