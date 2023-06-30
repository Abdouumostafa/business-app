import { clients } from "../constants"
import styles from "../style"

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client)=>{
          const {id, logo} = client;
          return <div key={id} className={`flex-1 min-w-[120px]`}>
            <img src={logo} alt="client logo" className="sm:w-[180px] w-[100px] object-contain m-2 p-3 rounded-md hover:bg-dimWhite duration-500 cursor-pointer"/>
          </div>
        })}
      </div>
    </section>
  )
}
export default Clients