export interface VehicleResponse {
  status: string;
  meta: {
    count: number;
  };
  data: {
    [tankId: string]: Vehicle;
  };
}

export interface Vehicle {
  description: string;
  engines: number[];
  guns: number[];
  is_gift: boolean;
  is_premium: boolean;
  is_premium_igr: boolean;
  is_wheeled: boolean;
  name: string;
  nation: string;
  next_tanks: Record<string, number>; // {researched_tank_id: xp_cost}
  price_credit: number;
  price_gold: number;
  prices_xp: Record<string, number>; // {parent_tank_id: xp_cost}
  provisions: number[];
  radios: number[];
  short_name: string;
  suspensions: number[];
  tag: string;
  tank_id: number;
  tier: number;
  turrets: number[];
  type: string;
  crew: Crew;
  default_profile: DefaultProfile;
  images: Images;
  modules_tree: ModuleTree[];
  multination: Multination;
}

export interface Crew {
  member_id: string;
  roles: Record<string, string>;
}

export interface DefaultProfile {
  hp: number;
  hull_hp: number;
  hull_weight: number;
  max_ammo: number;
  max_weight: number;
  speed_backward: number;
  speed_forward: number;
  weight: number;
  ammo: Ammo;
  armor: Armor;
  engine: Engine;
  gun: Gun;
  modules: Modules;
  radio: Radio;
  rapid?: Rapid;
  siege?: Siege;
  suspension: Suspension;
  turret: Turret;
}

export interface Ammo {
  damage: [number, number, number];
  penetration: [number, number, number];
  type: string;
  stun?: {
    duration: [number, number];
  };
}

export interface Armor {
  hull: {
    front: number;
    rear: number;
    sides: number;
  };
  turret: {
    front: number;
    rear: number;
    sides: number;
  };
}

export interface Engine {
  fire_chance: number;
  name: string;
  power: number;
  tag: string;
  tier: number;
  weight: number;
}

export interface Gun {
  aim_time: number;
  caliber: number;
  dispersion: number;
  fire_rate: number;
  move_down_arc: number;
  move_up_arc: number;
  name: string;
  reload_time: number;
  tag: string;
  tier: number;
  traverse_speed: number;
  weight: number;
}

export interface Modules {
  engine_id: number;
  gun_id: number;
  radio_id: number;
  suspension_id: number;
  turret_id: number;
}

export interface Radio {
  name: string;
  signal_range: number;
  tag: string;
  tier: number;
  weight: number;
}

export interface Rapid {
  speed_backward: number;
  speed_forward: number;
  suspension_steering_lock_angle: number;
  switch_off_time: number;
  switch_on_time: number;
}

export interface Siege {
  aim_time: number;
  dispersion: number;
  move_down_arc: number;
  move_up_arc: number;
  reload_time: number;
  speed_backward: number;
  suspension_traverse_speed: number;
  switch_off_time: number;
  switch_on_time: number;
}

export interface Suspension {
  load_limit: number;
  name: string;
  steering_lock_angle: number;
  tag: string;
  tier: number;
  traverse_speed: number;
  weight: number;
}

export interface Turret {
  hp: number;
  name: string;
  tag: string;
  tier: number;
  traverse_left_arc: number;
  traverse_right_arc: number;
  traverse_speed: number;
  view_range: number;
  weight: number;
}

export interface Images {
  big_icon: string;
  contour_icon: string;
  small_icon: string;
}

export interface ModuleTree {
  is_default: boolean;
  module_id: number;
  name: string;
  next_modules: number[];
  next_tanks: number[];
  price_credit: number;
  price_xp: number;
  type: string;
}

export interface Multination {
  is_default: boolean;
  tank_id: number;
}
