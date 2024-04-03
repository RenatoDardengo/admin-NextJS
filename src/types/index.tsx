export type SidbarProps={
    collapsed: boolean;
    onItemClick: (menuItem: string) => void;
  }

  export type  NavbarProps ={
    toggleLightMode: () => void;
    onCollapse: () => void;
    lightMode:boolean,
  }