export default function FooterNav({ title, links}) {
    return (
        <section>
            <div>
                <h4>{title}</h4>
                <ul>
                    {links.map((link, index) => (
                        <li key={index}><a href="#">{link}</a></li>
                    ))}
                </ul>
            </div>
        </section>
    )
}