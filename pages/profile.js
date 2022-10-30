import Image from "next/image";
import CustomButton from "../components/customButton";


export default function Profile() {
    return (
        <>
        <div className="bg-indigo-50 bor">
          <div>
           
          </div>
          <div className="text-center justify-center font-bold font-serif text-4xl mt-2 p-4">
            <h1>About Me</h1>
          </div>
        
            <div className="flex flex-wrap h-auto w-auto bg-slate-400 rounded-md mx-2 my-2 justify-around">
              <div className="h-20 w-full lg:w-1/3 ml-2 mt-2 mr-2 rounded-lg bg-slate-50 p-2 text-center justify-center text-xl font-mono order-1 ">Photo</div>
              <div className="h-20 w-full lg:w-3/5 ml-2 mt-2 mr-2 rounded-lg bg-slate-50 p-2 text-center text-xl font-mono order-3 lg:order-2 "> Information</div>
              <div className="h-50 w-full lg:w-1/3 ml-2 mt-2 mb-2 mr-2 rounded-lg bg-slate-50 p-2 justify-center text-center order-2 lg:order-3 ">
              <Image className="rounded-lg" src="/myPhoto.png" height={300} width={300} alt=""/>
              </div>
              <div className="h-50 w-full lg:w-3/5 ml-2 mt-2 mr-2 mb-2 rounded-lg bg-slate-50 order-4 ">
              <div className="text-center justify-center text-3xl font-bold mt-4">
              <h1 > Amaar Shaher </h1>
              </div>
              <div className="ml-4 text-2xl mt-4
              ">
                <h3 > - Full Stack Developer at Tamkeen Technologies from 2022/02 to Present</h3>
                <h3 > - Android Developer trining at Tuwaiq Academy from 2021/10 to 2022/02</h3>
                <h3 > - Graduated from the University of Tabuk, majoring in Computer Science from 2017 to 2021</h3>
                <h3 > - Technical Skils : JavaScript , HTML , CSS , Kotlin , XML , Python  </h3>
                <h3 > - Backend Technical Skils : </h3>
                <h3 > - jgjhv</h3>
                </div>
              </div>
              </div>
              <div className="text-center">
              <CustomButton url="https://www.linkedin.com/in/amaar-shaher">
                <Image className="justify-center" src="/linkedin.png" width={70} height={70} alt="">
        
                </Image>
              </CustomButton>
              </div>
              </div>
          </>
    )
}