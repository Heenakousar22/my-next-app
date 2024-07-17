const feautres=[
  {
    title:'Integration Ecosystem',
    description:'With end-to-end encryption , your data is securely stored '
  },
  {
    title:'Goal Setting and Tracking ',
    description:'Define and track your goals, breaking down objectives into achievbale tasks '
  },
  {
    title:'Secure data encryption ',
    description:'With end-to-end encryption , your data is securely stored '
  }
]




import EcosystemIcon from "./assets/ecosystem.svg"
export const Features=()=>{
  return (
    <div
    className="bg-black text-white py-[72px]">
      <div className="container">
       <h2 className="text-center font-bold text-5xl tracking-lighter"> Everyhting You need</h2>

       <p className="text-center mt-5 text-xl text-white/70"> Enjoy customaizable  lists, team work tools and smart tracking all in one place. Set tasks, get remainders, and see your progress.</p>

       <div className="mt-16 flex-col sm:flex-row gap-4">

      {feautres.map(({ title,description})=>(
        <div key={title}  className="border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1"> 
         <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded -lg">
        < EcosystemIcon/>
    
    </div>
     <h3 className="mt-6 font-bold">{title}</h3>
  <p className="mt-2 text-white/70">{description}</p>
  </div>
))}
       </div>
      </div>
    </div>
  );
}