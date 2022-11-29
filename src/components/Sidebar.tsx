import NewsIcon from '@iconscout/react-unicons/icons/uil-newspaper'
import GuideIcon from '@iconscout/react-unicons/icons/uil-compass'
import LibraryIcon from '@iconscout/react-unicons/icons/uil-book-alt'
import ForumIcon from '@iconscout/react-unicons/icons/uil-comments-alt'
import EventIcon from '@iconscout/react-unicons/icons/uil-megaphone'
import LunchIcon from '@iconscout/react-unicons/icons/uil-utensils-alt'

import {SVGProps} from 'react'

type IconProps = SVGProps<SVGSVGElement> & {
	color?: string;
	size?: number | string;
};

type Icon = (props: IconProps) => JSX.Element;

type SidebarCategory = 'Noticias' | 'Guía Sansano' | 'Biblioteca' | 'Foro' | 'Eventos' | 'Minuta Casino';

const ICONS = new Map<SidebarCategory, Icon>([
	['Noticias', NewsIcon],
	['Guía Sansano', GuideIcon],
	['Biblioteca', LibraryIcon],
	['Foro', ForumIcon],
	['Eventos', EventIcon],
	['Minuta Casino', LunchIcon],
]);

const SidebarElement = (props: { title: SidebarCategory, active: boolean }) => {
	let Icon = ICONS.get(props.title);
	if (!Icon || typeof Icon === 'undefined') {
		Icon = NewsIcon as Icon;
	}
	return <div className={`flex items-center text-xl font-semibold space-x-5 ${(props.active) ? 'text-cyan-400' : 'text-gray-500'}`}>
		<Icon /><p>{props.title}</p>
	</div>
}

export default function Sidebar(props: {active: SidebarCategory}) {
	return <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r space-y-8">
		<SidebarElement title="Noticias" active={props.active === 'Noticias'} />
		<SidebarElement title="Guía Sansano" active={props.active === 'Guía Sansano'} />
		<SidebarElement title="Biblioteca" active={props.active === 'Biblioteca'} />
		<SidebarElement title="Foro" active={props.active === 'Foro'} />
		<SidebarElement title="Eventos" active={props.active === 'Eventos'} />
		<SidebarElement title="Minuta Casino" active={props.active === 'Minuta Casino'} />
</div>
}
