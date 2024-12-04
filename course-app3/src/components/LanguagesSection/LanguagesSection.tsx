import './LanguagesSection.scss'
import colors from './colors'
import Text from '../text'
export type LanguagesSectionProps = {
    langsFromApi: {[key: string]: number},
}


const processedDataFromApi = ( data: object) =>{
    type myobject = {
        [key: string]: number
    } 

    let langSum: number = 0;
    let processedLangs: myobject = {};

    for ( let [, value] of Object.entries(data))
       langSum += value;

    for ( let [ key , value] of Object.entries(data)){
        let procent: number = value / langSum * 100;
        procent = Math.round(procent * 10) / 10;

        if ( procent < 1)
            processedLangs.other = processedLangs.other + procent || procent;
        else 
            processedLangs[key] = procent;
    }

    return processedLangs
}


const LanguagesSection: React.FC<LanguagesSectionProps> = ({langsFromApi}) => {
    let processedLangs: object = processedDataFromApi(langsFromApi);


    return(
        <div className="langBar">
           <Text view="p-18" weight='bold'>Languages</Text>
            <div className="langBar__bar">
                {Object.entries(processedLangs).map( ([key, value]) => {
                    const color = colors[key]?.color || "#cccccc";
                    return(<div key={key} className='langBar__langPart'style={{backgroundColor: `${color}`, width: `${value * 3 - 3}px`}}></div>)
                })}
            </div>

            <div className="langBar__stats">
            {Object.entries(processedLangs).map( ([key, value]) => {
                    const color = colors[key]?.color || "#cccccc";
                    return(<div key={value} className='langBar__stats-item'><span style={{backgroundColor: `${color}`}}/>{key}<p>{`${Math.round(value * 10) / 10}%`}</p></div>)
                })}
            </div>
        </div>   
    )
}

export default LanguagesSection;