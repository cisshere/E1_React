import { Item, ItemLink } from "./styles";

export const NavItem = ({item})=>{
	return (
		<Item>
			<ItemLink href="#">{item}</ItemLink>
		</Item>
	);
}