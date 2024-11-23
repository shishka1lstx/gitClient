import Text from '../text';
import './repoCard.scss';
import image from '../../assets/imgs/cardPhoto.jpg'
export type RepoCardProps = {
    html_url: string, 
    name: string, 
    owner: string,
    owner_url: string,
    avatar_url: string
}


const RepoCard: React.FC<RepoCardProps> =  ({html_url, name, owner, avatar_url, owner_url}) => {
   
    return(
     
        <div className="repoCard">
            <div className="repoCard__img-box">
                <img src={image} style={{height: "100%", width: "100%"}}/>
            </div>
            <div className="repoCard__info">
                <div className="repoCard__text-box">
                    <a href={owner_url}>
                        <Text className='repoCard__owner-info' tag='p' color='secondary' view='p-14' weight='bold' >
                            <img className='repoCard__avatar-img' src={avatar_url}/>
                            {owner}
                        </Text>
                    </a>
                    <Text className='card__title' tag='h1' color='accent' view='p-20' weight='bold' ><a href={html_url}>{name}</a></Text>
                </div>
            </div>
        </div>
    )
}

export default  RepoCard;
