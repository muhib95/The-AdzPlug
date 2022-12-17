// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <h2 className='bg-white'>Home</h2>
  <div className='grid grid-cols-3 md:gap-3 gap-[406px] justify-center overflow-y-hidden bg-white p-4'>
  <div className="card w-96 bg-gradient-to-r from-purple-900 to-purple-300 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-gradient-to-r from-purple-900 to-purple-300 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-gradient-to-r from-purple-900 to-purple-300 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  </div>
  <div className='my-6 grid sm:grid-cols-1 md:grid md:grid-cols-3 justify-center gap-3 '>
  <div className="card w-96 bg-gradient-to-r from-white to-blue-400 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Task Offers</h2>
    <p>Complete task to get coins</p>
   
  </div>
</div>
<div className="card w-96 bg-gradient-to-r from-white to-green-300 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Buzz Offers</h2>
    <p>Complete buzz offers to get coins</p>
   
  </div>
</div>
<div className="card w-96 bg-gradient-to-r from-white to-orange-700 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Limited offer</h2>
    <p>complete offers to get coins.</p>
   
  </div>
</div>

  </div>
  <div>
  <div className='my-6 grid sm:grid-cols-1 md:grid md:grid-cols-2 justify-center  '>
  <div className="card w-96 bg-gradient-to-r from-white to-blue-400 shadow-xl mx-auto ">
  <div className="card-body">
    <h2 className="card-title justify-center">Adscend offer</h2>
   
  </div>
</div>

<div className="card w-96 bg-gradient-to-r from-white to-orange-700 shadow-xl mx-auto mt-4">
  <div className="card-body">
    <h2 className="card-title justify-center">Adgate offer</h2>
    
    
  </div>
</div>

  </div>
  </div>
    </div>
  );
}

export default App;
