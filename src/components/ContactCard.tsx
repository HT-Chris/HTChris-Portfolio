
type iconInfoType = {
    icon:string,
    text:string,
    link:string,
}


export const ContactCard = ({iconInfo}:{iconInfo:iconInfoType}) => {

    return (
        <>
            <a href={iconInfo.link} id={`contact-${iconInfo.text}`} className='flex-center column contact-card' >
                    <h5>{iconInfo.text}</h5>
                    <img src={iconInfo.icon} alt="Icon" className='contact-icon' />
                        
            </a>
        </>
    )
}