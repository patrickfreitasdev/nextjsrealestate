import { v4 as uuid } from 'uuid'

export const mapMainMenuItems = (menuItems) => {

    const items = menuItems.map(menuItem => ({
        id: uuid(),
        destination: menuItem.menuItem.destination?.uri,
        label: menuItem.menuItem.label,
        submenu: (menuItem.items || []).map((submenuItem) => ({
            id: uuid(),
            destination: submenuItem.destination?.uri,
            label: submenuItem.label,
        })),
    }));

    return items

}