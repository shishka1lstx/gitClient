import './repoCard.scss';
import image from '../../assets/imgs/cardPhoto.jpg'
export type RepoCardProps = {
    name: string, 
    stars: number,
    description: string,
    update_date: Date,
}


const RepoCard: React.FC<RepoCardProps> =  ({ stars, name, description, update_date}) => {
    const date = new Date(update_date);
    const monthNames = [
        "January", "February", "March", 
        "April", "May", "June", 
        "July", "August", "September", 
        "October", "November", "December"
      ];
        


    return(
     
        <div className="repoCard">
            <div className="repoCard__img-box">
                <img src={image} />
            </div>
            <div className="repoCard__info">

                <div className="repoCard__text-box">

                    <span className="repoCard__subtitle">
                        <span className="repoCard__subtitle-stars">
                            <svg width="12" height="12" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00005 0.21875C7.12256 0.218671 7.24265 0.252887 7.34672 0.317526C7.4508 0.382165 7.5347 0.474645 7.58893 0.5845L9.23568 3.92262L12.9194 4.45812C13.0406 4.47572 13.1544 4.52686 13.248 4.60575C13.3416 4.68465 13.4113 4.78816 13.4492 4.90458C13.487 5.021 13.4916 5.1457 13.4623 5.26457C13.433 5.38344 13.371 5.49175 13.2834 5.57725L10.6182 8.176L11.2473 11.844C11.268 11.9647 11.2546 12.0888 11.2085 12.2022C11.1624 12.3157 11.0855 12.414 10.9864 12.486C10.8874 12.558 10.7702 12.6008 10.648 12.6097C10.5259 12.6186 10.4037 12.5931 10.2953 12.5361L7.00005 10.8036L3.7048 12.5361C3.59647 12.593 3.47439 12.6185 3.35234 12.6096C3.2303 12.6008 3.11316 12.558 3.01415 12.4861C2.91514 12.4142 2.8382 12.3161 2.79201 12.2028C2.74583 12.0895 2.73225 11.9655 2.7528 11.8449L3.3828 8.17512L0.715802 5.57725C0.627923 5.49178 0.565739 5.38341 0.536298 5.26441C0.506856 5.14541 0.511334 5.02055 0.549224 4.90396C0.587114 4.78738 0.6569 4.68374 0.750676 4.60478C0.844452 4.52583 0.958467 4.47472 1.0798 4.45725L4.76355 3.92262L6.41118 0.5845C6.46541 0.474645 6.54931 0.382165 6.65338 0.317526C6.75745 0.252887 6.87754 0.218671 7.00005 0.21875ZM7.00005 2.35812L5.78818 4.8125C5.74112 4.90779 5.67162 4.99022 5.58565 5.05271C5.49969 5.1152 5.39984 5.15588 5.29468 5.17125L2.5848 5.565L4.5448 7.476C4.62106 7.55025 4.67811 7.64195 4.71104 7.74316C4.74397 7.84438 4.75178 7.95209 4.7338 8.057L4.2718 10.7555L6.69468 9.4815C6.78885 9.43199 6.89366 9.40612 7.00005 9.40612C7.10645 9.40612 7.21125 9.43199 7.30543 9.4815L9.72918 10.7555L9.26543 8.057C9.24745 7.95209 9.25526 7.84438 9.28819 7.74316C9.32112 7.64195 9.37817 7.55025 9.45443 7.476L11.4144 5.56587L8.70543 5.17212C8.60027 5.15676 8.50041 5.11608 8.41445 5.05359C8.32849 4.9911 8.25899 4.90866 8.21193 4.81337L7.00005 2.35725V2.35812Z" fill="#FF9432"/>
                            </svg>

                            {stars}
                        </span>
                        <span className="repoCard__subtitle-date">{update_date && `Updated ${date.getDay()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`}</span>
                    </span>

                    <h2 className='repoCard__title'><a href="">{name}</a></h2>

                    <span className="repoCard__descripe">{description}</span>

                </div>
            </div>
        </div>
    )
}

export default  RepoCard;
