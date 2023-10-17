import { HomePublico, NavBarPublico, Process } from "../../../../componentes/headers/publico/components";


export interface HomePagePublicoProps {
  prop?: string;
}

export function HomePagePublico({ prop = 'default value' }: HomePagePublicoProps) {
  return (
    <>
      <div className="layout-wrapper landing">
        <NavBarPublico />
        <HomePublico />
        <Process />
      </div>
    </>
  )
}
