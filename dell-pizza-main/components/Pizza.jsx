
const Pizza = ({ image, title, delivery, fee, onClick }) => {
    return <div onClick={onClick} className="cursor-pointer transition-transform duration-500 hover:scale-105">
        <img src={image} alt="pizza-img" className="rounded-xl" />
        <div className="p-2">
            <h2 className="text-xl">{title}</h2>
            <p className="text-grey">{`${delivery} min. ${fee}$ delivery fee`}</p>
        </div>
    </div>
}
export default Pizza;