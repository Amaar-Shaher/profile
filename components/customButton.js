export default function CustomButton({color,url,children}) {
    return (
        <div>
            <a href={url}>
                <button className={color}>{children}</button>
            </a>
        </div>
    )
}