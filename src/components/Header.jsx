import logo from './../assets/img/zabbix.svg'

const menu = [
    {
        title: 'Products',
        link: '/'
    },
    {
        title: 'Project',
        link: '/'
    },
    {
        title: 'More',
        link: '/'
    }
]

const Header = () => {
    return( 
        <div>
            <div className="logo">
                <img src={logo} alt="" />
            </div>

            <div className='menu-wrapper'>
                <ul>
                    {menu.map((item, idx) => (
                        <li key={`menu item ${idx}`}><a href={item.link}>{item.title}</a></li>
                    ))}
                </ul>
            </div>
            <div className='auth-buttons'>
                <button className='login'>Login</button>
                <button className='sign-up'>Sign up</button>
            </div>
        </div> 
    );
}
 
export default Header;