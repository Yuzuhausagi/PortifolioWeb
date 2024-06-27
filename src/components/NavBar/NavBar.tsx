export const NavBar = () => {
    return (
        <nav className="navbar fixed top-0 left-0 right-0 bg-slate-900 text-white p-4 shadow-md z-10">
            <div>
                <ul className={"flex gap-2.5"}>
                    <li>
                        <a href={"#about"}>
                            <span> About me</span>
                        </a>
                    </li>
                    <li>
                        <a href={"#experience"}>
                            <span>Experience</span>
                        </a>
                    </li>
                    <li>
                        <a href={"#projects"}>
                            <span>Projects</span>
                        </a>
                    </li>
                    <li>
                        <a href={"#contact"}>
                            <span>Contacts</span>
                        </a>
                    </li>
                    <li>
                        <a href={"/resume"}>
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}