import { Logo } from "../../assets/icons"
import SingInForm from "../../components/SingInFrom"

const SingIn = () => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
        <div className="w-[360px] m-auto]">
            <div className="flex items-center justify-center gap-[20px] text-[var(--clr-gold)] mb-[30px]">
                <Logo/>
                <p className="text-[25px] text-[#000]">Admin paneli</p>
            </div>
            <SingInForm/>
        </div>
    </div>
  )
}

export default SingIn