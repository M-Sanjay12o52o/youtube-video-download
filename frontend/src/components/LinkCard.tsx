const LinkCard = ({ formatName }: any) => {
    return (
        <div>
            <a href={formatName.url} target='_blank' download
                className='outline-none italic underline'>
                {formatName.mimeType.split(";")[0] + " "}
                {formatName.hasVideo ? formatName.height + "p" : ""}
            </a>
        </div>
    )
}

export default LinkCard