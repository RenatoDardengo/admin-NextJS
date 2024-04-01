export type SidbarProps={
    collapsed: boolean;
  }

  export type  NavbarProps ={
    toggleLightMode: () => void;
    onCollapse: () => void;
    lightMode:boolean,
  }