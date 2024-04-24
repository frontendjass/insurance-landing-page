export default function FooterNav({ title, links}) {
    return (
        <section className="my-4">
            <div className="flex flex-col justify-center items-center ">
                <h4 className="mb-6 text-slate-400 font-bold uppercase">{title}</h4>
                <ul className="">
                    {links.map((link, index) => (
                        <li key={index} className="text-center text-slate-600 font-bold uppercase"><a href="#">{link}</a></li>
                    ))}
                </ul>
            </div>
        </section>
    )
}