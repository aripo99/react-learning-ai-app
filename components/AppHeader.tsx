import ProfileDropdown from './ProfileDropdown';
import NavLink from './NavLink';

function AppHeader() {
    return (
        <div className='p-4 border-b border-gray-40 dark:border-slate-800 flex justify-between items-center'>
            <div className='flex items-center space-x-8'>
                <ul className='flex space-x-3'>
                    <NavLink href='/lecture'>
                        Lecture
                    </NavLink>
                </ul>
            </div>

            <ProfileDropdown />
        </div>
    )
}

export default AppHeader;