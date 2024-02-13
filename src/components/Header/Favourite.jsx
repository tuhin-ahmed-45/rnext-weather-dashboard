import FavouriteIcon from '../../assets/heart.svg'

export const Favourite = ({onShow}) => {
    return (
        <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
            <img src={FavouriteIcon} alt="" />
            <span onClick={onShow}>Favourite Locations</span>
        </div>
    )
}
