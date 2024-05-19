const Dropdown = ({ submenus, dropdown }) => {
    return(
        <ul className={`dropdown ${dropdown ? "show" : ""}`}>
            {submenus.map((submenus, index) => (
                {...submenus.title==="Log out" ? 
                <li key={index} className="menu-items" style={{borderTop: " 0.05vw solid black"}}>
                    <a href={submenus.url}>{submenus.title}</a>
                </li>

                :

                <li key={index} className="menu-items">
                    <a href={submenus.url}>{submenus.title}</a>
                </li>
                }
            ))}
        </ul>
    ); 
}; 

export default Dropdown; 