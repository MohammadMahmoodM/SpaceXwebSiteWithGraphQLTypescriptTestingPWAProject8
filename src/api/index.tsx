import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type BasicMission = {
  __typename?: 'BasicMission';
  flight?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Capsule = {
  __typename?: 'Capsule';
  capsule_id?: Maybe<Scalars['String']>;
  capsule_serial?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  landings?: Maybe<Scalars['Int']>;
  missions?: Maybe<Array<Maybe<BasicMission>>>;
  original_launch?: Maybe<Scalars['String']>;
  original_launch_unix?: Maybe<Scalars['Float']>;
  reuse_count?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export enum CapsuleRange {
  Past = 'past',
  Upcoming = 'upcoming'
}

export type Core = {
  __typename?: 'Core';
  asds_attempts?: Maybe<Scalars['Int']>;
  asds_landings?: Maybe<Scalars['Int']>;
  block?: Maybe<Scalars['Int']>;
  core_serial?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  missions?: Maybe<Array<Maybe<BasicMission>>>;
  original_launch?: Maybe<Scalars['String']>;
  original_launch_unix?: Maybe<Scalars['Float']>;
  reuse_count?: Maybe<Scalars['Int']>;
  rtls_attempts?: Maybe<Scalars['Int']>;
  rtls_landings?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  water_landing?: Maybe<Scalars['Boolean']>;
};

export type Dimension = {
  __typename?: 'Dimension';
  feet?: Maybe<Scalars['Float']>;
  meters?: Maybe<Scalars['Float']>;
};

export type Dragon = {
  __typename?: 'Dragon';
  active?: Maybe<Scalars['Boolean']>;
  crew_capacity?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  diameter?: Maybe<Dimension>;
  dry_mass_kg?: Maybe<Scalars['Int']>;
  dry_mass_lb?: Maybe<Scalars['Int']>;
  first_flight?: Maybe<Scalars['String']>;
  heat_shield?: Maybe<HeatShield>;
  height_w_trunk?: Maybe<Dimension>;
  id?: Maybe<Scalars['String']>;
  launch_payload_mass?: Maybe<Mass>;
  launch_payload_vol?: Maybe<PayloadVolume>;
  name?: Maybe<Scalars['String']>;
  orbit_duration_yr?: Maybe<Scalars['Int']>;
  pressurized_capsule?: Maybe<PressurizedCapsule>;
  return_payload_mass?: Maybe<Mass>;
  return_payload_vol?: Maybe<PayloadVolume>;
  sidewall_angle_deg?: Maybe<Scalars['Int']>;
  thrusters?: Maybe<Array<Maybe<Thruster>>>;
  trunk?: Maybe<Trunk>;
  type?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type Engines = {
  __typename?: 'Engines';
  engine_loss_max?: Maybe<Scalars['Int']>;
  layout?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  propellant_1?: Maybe<Scalars['String']>;
  propellant_2?: Maybe<Scalars['String']>;
  thrust_sea_level?: Maybe<Thrust>;
  thrust_to_weight?: Maybe<Scalars['Float']>;
  thrust_vacuum?: Maybe<Thrust>;
  type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type Fairing = {
  __typename?: 'Fairing';
  diameter?: Maybe<Dimension>;
  height?: Maybe<Dimension>;
};

export type Headquarters = {
  __typename?: 'Headquarters';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type HeatShield = {
  __typename?: 'HeatShield';
  dev_partner?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  size_meters?: Maybe<Scalars['Float']>;
  temp_degrees?: Maybe<Scalars['Int']>;
};

export type History = {
  __typename?: 'History';
  details?: Maybe<Scalars['String']>;
  event_date_unix?: Maybe<Scalars['Float']>;
  event_date_utc?: Maybe<Scalars['String']>;
  flight_number?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  links?: Maybe<HistoryLinks>;
  title?: Maybe<Scalars['String']>;
};

export type HistoryLinks = {
  __typename?: 'HistoryLinks';
  article?: Maybe<Scalars['String']>;
  reddit?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type Info = {
  __typename?: 'Info';
  ceo?: Maybe<Scalars['String']>;
  coo?: Maybe<Scalars['String']>;
  cto?: Maybe<Scalars['String']>;
  cto_propulsion?: Maybe<Scalars['String']>;
  employees?: Maybe<Scalars['Int']>;
  founded?: Maybe<Scalars['Int']>;
  founder?: Maybe<Scalars['String']>;
  headquarters?: Maybe<Headquarters>;
  launch_sites?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  test_sites?: Maybe<Scalars['Int']>;
  valuation?: Maybe<Scalars['Float']>;
  vehicles?: Maybe<Scalars['Int']>;
};

export type LandingLegs = {
  __typename?: 'LandingLegs';
  material?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
};

export type Landingpad = {
  __typename?: 'Landingpad';
  attempted_landings?: Maybe<Scalars['Int']>;
  details?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  landing_type?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  status?: Maybe<Scalars['String']>;
  successful_landings?: Maybe<Scalars['Int']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type Launch = {
  __typename?: 'Launch';
  details?: Maybe<Scalars['String']>;
  flight_number?: Maybe<Scalars['Int']>;
  is_tentative?: Maybe<Scalars['Boolean']>;
  launch_date_local?: Maybe<Scalars['String']>;
  launch_date_unix?: Maybe<Scalars['Float']>;
  launch_date_utc?: Maybe<Scalars['String']>;
  launch_site?: Maybe<LaunchSite>;
  launch_success?: Maybe<Scalars['Boolean']>;
  launch_window?: Maybe<Scalars['Int']>;
  launch_year?: Maybe<Scalars['Int']>;
  links?: Maybe<LaunchLinks>;
  mission_id?: Maybe<Array<Maybe<Scalars['String']>>>;
  mission_name?: Maybe<Scalars['String']>;
  rocket?: Maybe<LaunchRocket>;
  ships?: Maybe<Array<Maybe<Scalars['String']>>>;
  static_fire_date_unix?: Maybe<Scalars['Float']>;
  static_fire_date_utc?: Maybe<Scalars['String']>;
  tbd?: Maybe<Scalars['Boolean']>;
  telemetry?: Maybe<LaunchTelemetry>;
  tentative_max_precision?: Maybe<Scalars['String']>;
  timeline?: Maybe<LaunchTimeline>;
  upcoming?: Maybe<Scalars['Boolean']>;
};

export type LaunchLinks = {
  __typename?: 'LaunchLinks';
  article_link?: Maybe<Scalars['String']>;
  flickr_images?: Maybe<Array<Maybe<Scalars['String']>>>;
  mission_patch?: Maybe<Scalars['String']>;
  mission_patch_small?: Maybe<Scalars['String']>;
  presskit?: Maybe<Scalars['String']>;
  reddit_campaign?: Maybe<Scalars['String']>;
  reddit_launch?: Maybe<Scalars['String']>;
  reddit_media?: Maybe<Scalars['String']>;
  reddit_recovery?: Maybe<Scalars['String']>;
  video_link?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
  youtube_id?: Maybe<Scalars['String']>;
};

export enum LaunchRange {
  Latest = 'latest',
  Next = 'next',
  Past = 'past',
  Upcoming = 'upcoming'
}

export type LaunchRocket = {
  __typename?: 'LaunchRocket';
  fairings?: Maybe<LaunchRocketFairings>;
  first_stage?: Maybe<LaunchRocketFirstStage>;
  rocket_id?: Maybe<Scalars['String']>;
  rocket_name?: Maybe<Scalars['String']>;
  rocket_type?: Maybe<Scalars['String']>;
  second_stage?: Maybe<LaunchRocketSecondStage>;
};

export type LaunchRocketFairings = {
  __typename?: 'LaunchRocketFairings';
  recovered?: Maybe<Scalars['Boolean']>;
  recovery_attempt?: Maybe<Scalars['Boolean']>;
  reused?: Maybe<Scalars['Boolean']>;
  ship?: Maybe<Scalars['String']>;
};

export type LaunchRocketFirstStage = {
  __typename?: 'LaunchRocketFirstStage';
  cores?: Maybe<Array<Maybe<LaunchRocketFirstStageCore>>>;
};

export type LaunchRocketFirstStageCore = {
  __typename?: 'LaunchRocketFirstStageCore';
  block?: Maybe<Scalars['Int']>;
  core_serial?: Maybe<Scalars['String']>;
  flight?: Maybe<Scalars['Int']>;
  gridfins?: Maybe<Scalars['Boolean']>;
  land_success?: Maybe<Scalars['Boolean']>;
  landing_intent?: Maybe<Scalars['Boolean']>;
  landing_type?: Maybe<Scalars['String']>;
  landing_vehicle?: Maybe<Scalars['String']>;
  legs?: Maybe<Scalars['Boolean']>;
  reused?: Maybe<Scalars['Boolean']>;
};

export type LaunchRocketSecondStage = {
  __typename?: 'LaunchRocketSecondStage';
  block?: Maybe<Scalars['Int']>;
  payloads?: Maybe<Array<Maybe<Payload>>>;
};

export type LaunchSite = {
  __typename?: 'LaunchSite';
  site_id?: Maybe<Scalars['String']>;
  site_name?: Maybe<Scalars['String']>;
  site_name_long?: Maybe<Scalars['String']>;
};

export type LaunchTelemetry = {
  __typename?: 'LaunchTelemetry';
  flight_club?: Maybe<Scalars['String']>;
};

export type LaunchTimeline = {
  __typename?: 'LaunchTimeline';
  beco?: Maybe<Scalars['Int']>;
  center_core_boostback?: Maybe<Scalars['Int']>;
  center_core_entry_burn?: Maybe<Scalars['Int']>;
  center_core_landing?: Maybe<Scalars['Int']>;
  center_stage_sep?: Maybe<Scalars['Int']>;
  dragon_bay_door_deploy?: Maybe<Scalars['Int']>;
  dragon_separation?: Maybe<Scalars['Int']>;
  dragon_solar_deploy?: Maybe<Scalars['Int']>;
  engine_chill?: Maybe<Scalars['Int']>;
  fairing_deploy?: Maybe<Scalars['Int']>;
  first_stage_entry_burn?: Maybe<Scalars['Int']>;
  first_stage_landing?: Maybe<Scalars['Int']>;
  first_stage_landing_burn?: Maybe<Scalars['Int']>;
  go_for_launch?: Maybe<Scalars['Int']>;
  go_for_prop_loading?: Maybe<Scalars['Int']>;
  ignition?: Maybe<Scalars['Int']>;
  liftoff?: Maybe<Scalars['Int']>;
  maxq?: Maybe<Scalars['Int']>;
  meco?: Maybe<Scalars['Int']>;
  payload_deploy?: Maybe<Scalars['Int']>;
  payload_deploy_1?: Maybe<Scalars['Int']>;
  payload_deploy_2?: Maybe<Scalars['Int']>;
  prelaunch_checks?: Maybe<Scalars['Int']>;
  propellant_pressurization?: Maybe<Scalars['Int']>;
  rp1_loading?: Maybe<Scalars['Int']>;
  seco_1?: Maybe<Scalars['Int']>;
  seco_2?: Maybe<Scalars['Int']>;
  second_stage_ignition?: Maybe<Scalars['Int']>;
  second_stage_restart?: Maybe<Scalars['Int']>;
  side_core_boostback?: Maybe<Scalars['Int']>;
  side_core_entry_burn?: Maybe<Scalars['Int']>;
  side_core_landing?: Maybe<Scalars['Int']>;
  side_core_sep?: Maybe<Scalars['Int']>;
  stage1_lox_loading?: Maybe<Scalars['Int']>;
  stage1_rp1_loading?: Maybe<Scalars['Int']>;
  stage2_lox_loading?: Maybe<Scalars['Int']>;
  stage2_rp1_loading?: Maybe<Scalars['Int']>;
  stage_sep?: Maybe<Scalars['Int']>;
  webcast_liftoff?: Maybe<Scalars['Int']>;
};

export type Launchpad = {
  __typename?: 'Launchpad';
  attempted_launches?: Maybe<Scalars['Int']>;
  details?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  location?: Maybe<Location>;
  site_id?: Maybe<Scalars['String']>;
  site_name_long?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  successful_launches?: Maybe<Scalars['Int']>;
  vehicles_launched?: Maybe<Array<Maybe<Scalars['String']>>>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type Location = {
  __typename?: 'Location';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
};

export type Mass = {
  __typename?: 'Mass';
  kg?: Maybe<Scalars['Int']>;
  lb?: Maybe<Scalars['Int']>;
};

export type Mission = {
  __typename?: 'Mission';
  description?: Maybe<Scalars['String']>;
  manufacturers?: Maybe<Array<Maybe<Scalars['String']>>>;
  mission_id?: Maybe<Scalars['String']>;
  mission_name?: Maybe<Scalars['String']>;
  payload_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  twitter?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export enum Order {
  Asc = 'asc',
  Desc = 'desc'
}

export type Payload = {
  __typename?: 'Payload';
  cap_serial?: Maybe<Scalars['String']>;
  cargo_manifest?: Maybe<Scalars['String']>;
  customers?: Maybe<Array<Maybe<Scalars['String']>>>;
  flight_time_sec?: Maybe<Scalars['Int']>;
  manufacturer?: Maybe<Scalars['String']>;
  mass_returned_kg?: Maybe<Scalars['Float']>;
  mass_returned_lbs?: Maybe<Scalars['Float']>;
  nationality?: Maybe<Scalars['String']>;
  norad_id?: Maybe<Array<Maybe<Scalars['String']>>>;
  orbit?: Maybe<Scalars['String']>;
  orbit_params?: Maybe<PayloadOrbitParams>;
  payload_id?: Maybe<Scalars['String']>;
  payload_mass_kg?: Maybe<Scalars['Float']>;
  payload_mass_lbs?: Maybe<Scalars['Float']>;
  payload_type?: Maybe<Scalars['String']>;
  reused?: Maybe<Scalars['Boolean']>;
};

export type PayloadOrbitParams = {
  __typename?: 'PayloadOrbitParams';
  apoapsis_km?: Maybe<Scalars['Float']>;
  arg_of_pericenter?: Maybe<Scalars['Float']>;
  eccentricity?: Maybe<Scalars['Float']>;
  epoch?: Maybe<Scalars['String']>;
  inclination_deg?: Maybe<Scalars['Float']>;
  lifespan_years?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  mean_anomaly?: Maybe<Scalars['Float']>;
  mean_motion?: Maybe<Scalars['Float']>;
  periapsis_km?: Maybe<Scalars['Float']>;
  period_min?: Maybe<Scalars['Float']>;
  raan?: Maybe<Scalars['Float']>;
  reference_system?: Maybe<Scalars['String']>;
  regime?: Maybe<Scalars['String']>;
  semi_major_axis_km?: Maybe<Scalars['Float']>;
};

export type PayloadVolume = {
  __typename?: 'PayloadVolume';
  cubic_feet?: Maybe<Scalars['Int']>;
  cubic_meters?: Maybe<Scalars['Int']>;
};

export type Position = {
  __typename?: 'Position';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type PressurizedCapsule = {
  __typename?: 'PressurizedCapsule';
  payload_volume?: Maybe<PayloadVolume>;
};

export type Query = {
  __typename?: 'Query';
  capsule?: Maybe<Capsule>;
  capsules?: Maybe<Array<Maybe<Capsule>>>;
  core?: Maybe<Core>;
  cores?: Maybe<Array<Maybe<Core>>>;
  dragon?: Maybe<Dragon>;
  dragons?: Maybe<Array<Maybe<Dragon>>>;
  history?: Maybe<Array<Maybe<History>>>;
  info?: Maybe<Info>;
  landingpad?: Maybe<Landingpad>;
  landingpads?: Maybe<Array<Maybe<Landingpad>>>;
  launch?: Maybe<Launch>;
  launches?: Maybe<Array<Maybe<Launch>>>;
  launchpad?: Maybe<Launchpad>;
  launchpads?: Maybe<Array<Maybe<Launchpad>>>;
  mission?: Maybe<Mission>;
  missions?: Maybe<Array<Maybe<Mission>>>;
  payload?: Maybe<Payload>;
  payloads?: Maybe<Array<Maybe<Payload>>>;
  roadster?: Maybe<Roadster>;
  rocket?: Maybe<Rocket>;
  rockets?: Maybe<Array<Maybe<Rocket>>>;
  ship?: Maybe<Ship>;
  ships?: Maybe<Array<Maybe<Ship>>>;
};


export type QueryCapsuleArgs = {
  capsule_serial: Scalars['String'];
};


export type QueryCapsulesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Order>;
  range?: Maybe<CapsuleRange>;
  sort?: Maybe<Scalars['String']>;
};


export type QueryCoreArgs = {
  core_serial: Scalars['String'];
};


export type QueryCoresArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Order>;
  sort?: Maybe<Scalars['String']>;
};


export type QueryDragonArgs = {
  id: Scalars['String'];
};


export type QueryDragonsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryHistoryArgs = {
  id?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Order>;
  sort?: Maybe<Scalars['String']>;
};


export type QueryLandingpadArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryLandingpadsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryLaunchArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryLaunchesArgs = {
  ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Order>;
  range?: Maybe<LaunchRange>;
  sort?: Maybe<Scalars['String']>;
};


export type QueryLaunchpadArgs = {
  id: Scalars['String'];
};


export type QueryLaunchpadsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryMissionArgs = {
  id: Scalars['String'];
};


export type QueryMissionsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryPayloadArgs = {
  id: Scalars['String'];
};


export type QueryPayloadsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Order>;
  sort?: Maybe<Scalars['String']>;
};


export type QueryRocketArgs = {
  id: Scalars['String'];
};


export type QueryRocketsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryShipArgs = {
  id: Scalars['String'];
};


export type QueryShipsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Order>;
  sort?: Maybe<Scalars['String']>;
};

export type Roadster = {
  __typename?: 'Roadster';
  apoapsis_au?: Maybe<Scalars['Float']>;
  details?: Maybe<Scalars['String']>;
  earth_distance_km?: Maybe<Scalars['Float']>;
  earth_distance_mi?: Maybe<Scalars['Float']>;
  eccentricity?: Maybe<Scalars['Float']>;
  epoch_jd?: Maybe<Scalars['Float']>;
  inclination?: Maybe<Scalars['Float']>;
  launch_date_unix?: Maybe<Scalars['Float']>;
  launch_date_utc?: Maybe<Scalars['String']>;
  launch_mass_kg?: Maybe<Scalars['Int']>;
  launch_mass_lbs?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Float']>;
  mars_distance_km?: Maybe<Scalars['Float']>;
  mars_distance_mi?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  norad_id?: Maybe<Scalars['Int']>;
  orbit_type?: Maybe<Scalars['String']>;
  periapsis_arg?: Maybe<Scalars['Float']>;
  period_days?: Maybe<Scalars['Float']>;
  semi_major_axis_au?: Maybe<Scalars['Float']>;
  speed_kph?: Maybe<Scalars['Float']>;
  speed_mph?: Maybe<Scalars['Float']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type Rocket = {
  __typename?: 'Rocket';
  active?: Maybe<Scalars['Boolean']>;
  boosters?: Maybe<Scalars['Int']>;
  company?: Maybe<Scalars['String']>;
  cost_per_launch?: Maybe<Scalars['Int']>;
  country?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  diameter?: Maybe<Dimension>;
  engines?: Maybe<Engines>;
  first_flight?: Maybe<Scalars['String']>;
  first_stage?: Maybe<RocketFirstStage>;
  flickr_images?: Maybe<Array<Maybe<Scalars['String']>>>;
  height?: Maybe<Dimension>;
  id?: Maybe<Scalars['Int']>;
  landing_legs?: Maybe<LandingLegs>;
  mass?: Maybe<Mass>;
  payload_weights?: Maybe<Array<Maybe<RocketPayloadWeight>>>;
  rocket_id?: Maybe<Scalars['String']>;
  rocket_name?: Maybe<Scalars['String']>;
  rocket_type?: Maybe<Scalars['String']>;
  second_stage?: Maybe<RocketSecondStage>;
  stages?: Maybe<Scalars['Int']>;
  success_rate_pct?: Maybe<Scalars['Float']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type RocketFirstStage = {
  __typename?: 'RocketFirstStage';
  burn_time_sec?: Maybe<Scalars['Int']>;
  engines?: Maybe<Scalars['Int']>;
  fuel_amount_tons?: Maybe<Scalars['Float']>;
  reusable?: Maybe<Scalars['Boolean']>;
  thrust_sea_level?: Maybe<Thrust>;
  thrust_vacuum?: Maybe<Thrust>;
};

export type RocketPayload = {
  __typename?: 'RocketPayload';
  composite_fairing?: Maybe<Fairing>;
  option_1?: Maybe<Scalars['String']>;
  option_2?: Maybe<Scalars['String']>;
};

export type RocketPayloadWeight = {
  __typename?: 'RocketPayloadWeight';
  id?: Maybe<Scalars['String']>;
  kg?: Maybe<Scalars['Float']>;
  lb?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
};

export type RocketSecondStage = {
  __typename?: 'RocketSecondStage';
  burn_time_sec?: Maybe<Scalars['Int']>;
  engines?: Maybe<Scalars['Int']>;
  fuel_amount_tons?: Maybe<Scalars['Float']>;
  payloads?: Maybe<RocketPayload>;
  thrust?: Maybe<Thrust>;
};

export type Ship = {
  __typename?: 'Ship';
  abs?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  attempted_landings?: Maybe<Scalars['Int']>;
  class?: Maybe<Scalars['Int']>;
  course_deg?: Maybe<Scalars['Float']>;
  home_port?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  imo?: Maybe<Scalars['Int']>;
  missions?: Maybe<Array<Maybe<BasicMission>>>;
  mmsi?: Maybe<Scalars['Int']>;
  position?: Maybe<Position>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  ship_id?: Maybe<Scalars['String']>;
  ship_model?: Maybe<Scalars['String']>;
  ship_name?: Maybe<Scalars['String']>;
  ship_type?: Maybe<Scalars['String']>;
  speed_kn?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  successful_landings?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  weight_kg?: Maybe<Scalars['Float']>;
  weight_lbs?: Maybe<Scalars['Float']>;
  year_built?: Maybe<Scalars['Int']>;
};

export type Thrust = {
  __typename?: 'Thrust';
  kN?: Maybe<Scalars['Float']>;
  lbf?: Maybe<Scalars['Float']>;
};

export type Thruster = {
  __typename?: 'Thruster';
  amount?: Maybe<Scalars['Int']>;
  fuel_1?: Maybe<Scalars['String']>;
  fuel_2?: Maybe<Scalars['String']>;
  pods?: Maybe<Scalars['Int']>;
  thrust?: Maybe<Thrust>;
  type?: Maybe<Scalars['String']>;
};

export type Trunk = {
  __typename?: 'Trunk';
  cargo?: Maybe<TrunkCargo>;
  trunk_volume?: Maybe<PayloadVolume>;
};

export type TrunkCargo = {
  __typename?: 'TrunkCargo';
  solar_array?: Maybe<Scalars['Int']>;
  unpressurized_cargo?: Maybe<Scalars['Boolean']>;
};

export type NextLaunchQueryVariables = Exact<{ [key: string]: never; }>;


export type NextLaunchQuery = { __typename?: 'Query', launches?: Array<{ __typename?: 'Launch', flight_number?: number | null | undefined, mission_name?: string | null | undefined, launch_date_unix?: number | null | undefined, launch_site?: { __typename?: 'LaunchSite', site_name_long?: string | null | undefined } | null | undefined, links?: { __typename?: 'LaunchLinks', mission_patch_small?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type AllLaunchesIdsQueryVariables = Exact<{
  range?: Maybe<LaunchRange>;
  order?: Maybe<Order>;
}>;


export type AllLaunchesIdsQuery = { __typename?: 'Query', launches?: Array<{ __typename?: 'Launch', flight_number?: number | null | undefined } | null | undefined> | null | undefined };

export type HistoryQueryVariables = Exact<{ [key: string]: never; }>;


export type HistoryQuery = { __typename?: 'Query', history?: Array<{ __typename?: 'History', id?: number | null | undefined, title?: string | null | undefined, event_date_unix?: number | null | undefined, flight_number?: number | null | undefined, details?: string | null | undefined, links?: { __typename?: 'HistoryLinks', article?: string | null | undefined, wikipedia?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type LaunchDetailsQueryVariables = Exact<{
  flightNumber: Scalars['String'];
}>;


export type LaunchDetailsQuery = { __typename?: 'Query', launch?: { __typename?: 'Launch', mission_name?: string | null | undefined, flight_number?: number | null | undefined, upcoming?: boolean | null | undefined, launch_success?: boolean | null | undefined, static_fire_date_unix?: number | null | undefined, launch_date_unix?: number | null | undefined, details?: string | null | undefined, launch_site?: { __typename?: 'LaunchSite', site_name_long?: string | null | undefined } | null | undefined, rocket?: { __typename?: 'LaunchRocket', rocket_id?: string | null | undefined, rocket_name?: string | null | undefined } | null | undefined, links?: { __typename?: 'LaunchLinks', mission_patch_small?: string | null | undefined, article_link?: string | null | undefined, wikipedia?: string | null | undefined, video_link?: string | null | undefined, flickr_images?: Array<string | null | undefined> | null | undefined } | null | undefined } | null | undefined };

export type RecentLaunchesIdsQueryVariables = Exact<{
  count?: Maybe<Scalars['Int']>;
}>;


export type RecentLaunchesIdsQuery = { __typename?: 'Query', launches?: Array<{ __typename?: 'Launch', flight_number?: number | null | undefined } | null | undefined> | null | undefined };

export type RocketDetailsQueryVariables = Exact<{
  rocketId: Scalars['String'];
}>;


export type RocketDetailsQuery = { __typename?: 'Query', rocket?: { __typename?: 'Rocket', rocket_id?: string | null | undefined, rocket_name?: string | null | undefined, description?: string | null | undefined, active?: boolean | null | undefined, first_flight?: string | null | undefined, stages?: number | null | undefined, boosters?: number | null | undefined, cost_per_launch?: number | null | undefined, success_rate_pct?: number | null | undefined, company?: string | null | undefined, country?: string | null | undefined, wikipedia?: string | null | undefined, flickr_images?: Array<string | null | undefined> | null | undefined, height?: { __typename?: 'Dimension', meters?: number | null | undefined } | null | undefined, diameter?: { __typename?: 'Dimension', meters?: number | null | undefined } | null | undefined, mass?: { __typename?: 'Mass', kg?: number | null | undefined } | null | undefined, landing_legs?: { __typename?: 'LandingLegs', number?: number | null | undefined, material?: string | null | undefined } | null | undefined, payload_weights?: Array<{ __typename?: 'RocketPayloadWeight', name?: string | null | undefined, kg?: number | null | undefined } | null | undefined> | null | undefined, first_stage?: { __typename?: 'RocketFirstStage', reusable?: boolean | null | undefined, engines?: number | null | undefined, fuel_amount_tons?: number | null | undefined, burn_time_sec?: number | null | undefined, thrust_sea_level?: { __typename?: 'Thrust', kN?: number | null | undefined } | null | undefined, thrust_vacuum?: { __typename?: 'Thrust', kN?: number | null | undefined } | null | undefined } | null | undefined, second_stage?: { __typename?: 'RocketSecondStage', engines?: number | null | undefined, fuel_amount_tons?: number | null | undefined, burn_time_sec?: number | null | undefined, thrust?: { __typename?: 'Thrust', kN?: number | null | undefined } | null | undefined, payloads?: { __typename?: 'RocketPayload', option_1?: string | null | undefined, option_2?: string | null | undefined, composite_fairing?: { __typename?: 'Fairing', height?: { __typename?: 'Dimension', meters?: number | null | undefined } | null | undefined, diameter?: { __typename?: 'Dimension', meters?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined, engines?: { __typename?: 'Engines', number?: number | null | undefined, type?: string | null | undefined, version?: string | null | undefined, layout?: string | null | undefined, engine_loss_max?: number | null | undefined, propellant_1?: string | null | undefined, propellant_2?: string | null | undefined, thrust_to_weight?: number | null | undefined, thrust_sea_level?: { __typename?: 'Thrust', kN?: number | null | undefined } | null | undefined, thrust_vacuum?: { __typename?: 'Thrust', kN?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type RocketsDataShortQueryVariables = Exact<{ [key: string]: never; }>;


export type RocketsDataShortQuery = { __typename?: 'Query', rockets?: Array<{ __typename?: 'Rocket', rocket_id?: string | null | undefined, rocket_name?: string | null | undefined, active?: boolean | null | undefined, first_flight?: string | null | undefined, description?: string | null | undefined, wikipedia?: string | null | undefined } | null | undefined> | null | undefined };

export type SingleLaunchQueryVariables = Exact<{
  flightNumber?: Maybe<Scalars['String']>;
}>;


export type SingleLaunchQuery = { __typename?: 'Query', launch?: { __typename?: 'Launch', flight_number?: number | null | undefined, mission_name?: string | null | undefined, launch_date_unix?: number | null | undefined, launch_success?: boolean | null | undefined, launch_site?: { __typename?: 'LaunchSite', site_name?: string | null | undefined } | null | undefined, links?: { __typename?: 'LaunchLinks', mission_patch_small?: string | null | undefined, article_link?: string | null | undefined, video_link?: string | null | undefined } | null | undefined } | null | undefined };


export const NextLaunchDocument = gql`
    query nextLaunch {
  launches(range: next) {
    flight_number
    mission_name
    launch_date_unix
    launch_site {
      site_name_long
    }
    links {
      mission_patch_small
    }
  }
}
    `;

/**
 * __useNextLaunchQuery__
 *
 * To run a query within a React component, call `useNextLaunchQuery` and pass it any options that fit your needs.
 * When your component renders, `useNextLaunchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNextLaunchQuery({
 *   variables: {
 *   },
 * });
 */
export function useNextLaunchQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<NextLaunchQuery, NextLaunchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<NextLaunchQuery, NextLaunchQueryVariables>(NextLaunchDocument, options);
      }
export function useNextLaunchLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NextLaunchQuery, NextLaunchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<NextLaunchQuery, NextLaunchQueryVariables>(NextLaunchDocument, options);
        }
export type NextLaunchQueryHookResult = ReturnType<typeof useNextLaunchQuery>;
export type NextLaunchLazyQueryHookResult = ReturnType<typeof useNextLaunchLazyQuery>;
export type NextLaunchQueryResult = Apollo.QueryResult<NextLaunchQuery, NextLaunchQueryVariables>;
export const AllLaunchesIdsDocument = gql`
    query allLaunchesIds($range: LaunchRange, $order: Order) {
  launches(range: $range, sort: "flight_number", order: $order) {
    flight_number
  }
}
    `;

/**
 * __useAllLaunchesIdsQuery__
 *
 * To run a query within a React component, call `useAllLaunchesIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllLaunchesIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllLaunchesIdsQuery({
 *   variables: {
 *      range: // value for 'range'
 *      order: // value for 'order'
 *   },
 * });
 */
export function useAllLaunchesIdsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllLaunchesIdsQuery, AllLaunchesIdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllLaunchesIdsQuery, AllLaunchesIdsQueryVariables>(AllLaunchesIdsDocument, options);
      }
export function useAllLaunchesIdsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllLaunchesIdsQuery, AllLaunchesIdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllLaunchesIdsQuery, AllLaunchesIdsQueryVariables>(AllLaunchesIdsDocument, options);
        }
export type AllLaunchesIdsQueryHookResult = ReturnType<typeof useAllLaunchesIdsQuery>;
export type AllLaunchesIdsLazyQueryHookResult = ReturnType<typeof useAllLaunchesIdsLazyQuery>;
export type AllLaunchesIdsQueryResult = Apollo.QueryResult<AllLaunchesIdsQuery, AllLaunchesIdsQueryVariables>;
export const HistoryDocument = gql`
    query history {
  history {
    id
    title
    event_date_unix
    flight_number
    details
    links {
      article
      wikipedia
    }
  }
}
    `;

/**
 * __useHistoryQuery__
 *
 * To run a query within a React component, call `useHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHistoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useHistoryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HistoryQuery, HistoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<HistoryQuery, HistoryQueryVariables>(HistoryDocument, options);
      }
export function useHistoryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HistoryQuery, HistoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<HistoryQuery, HistoryQueryVariables>(HistoryDocument, options);
        }
export type HistoryQueryHookResult = ReturnType<typeof useHistoryQuery>;
export type HistoryLazyQueryHookResult = ReturnType<typeof useHistoryLazyQuery>;
export type HistoryQueryResult = Apollo.QueryResult<HistoryQuery, HistoryQueryVariables>;
export const LaunchDetailsDocument = gql`
    query launchDetails($flightNumber: String!) {
  launch(id: $flightNumber) {
    mission_name
    flight_number
    upcoming
    launch_success
    static_fire_date_unix
    launch_date_unix
    launch_site {
      site_name_long
    }
    details
    rocket {
      rocket_id
      rocket_name
    }
    links {
      mission_patch_small
      article_link
      wikipedia
      video_link
      flickr_images
    }
  }
}
    `;

/**
 * __useLaunchDetailsQuery__
 *
 * To run a query within a React component, call `useLaunchDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLaunchDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLaunchDetailsQuery({
 *   variables: {
 *      flightNumber: // value for 'flightNumber'
 *   },
 * });
 */
export function useLaunchDetailsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<LaunchDetailsQuery, LaunchDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<LaunchDetailsQuery, LaunchDetailsQueryVariables>(LaunchDetailsDocument, options);
      }
export function useLaunchDetailsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LaunchDetailsQuery, LaunchDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<LaunchDetailsQuery, LaunchDetailsQueryVariables>(LaunchDetailsDocument, options);
        }
export type LaunchDetailsQueryHookResult = ReturnType<typeof useLaunchDetailsQuery>;
export type LaunchDetailsLazyQueryHookResult = ReturnType<typeof useLaunchDetailsLazyQuery>;
export type LaunchDetailsQueryResult = Apollo.QueryResult<LaunchDetailsQuery, LaunchDetailsQueryVariables>;
export const RecentLaunchesIdsDocument = gql`
    query recentLaunchesIds($count: Int) {
  launches(range: past, sort: "flight_number", order: desc, limit: $count) {
    flight_number
  }
}
    `;

/**
 * __useRecentLaunchesIdsQuery__
 *
 * To run a query within a React component, call `useRecentLaunchesIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecentLaunchesIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecentLaunchesIdsQuery({
 *   variables: {
 *      count: // value for 'count'
 *   },
 * });
 */
export function useRecentLaunchesIdsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<RecentLaunchesIdsQuery, RecentLaunchesIdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<RecentLaunchesIdsQuery, RecentLaunchesIdsQueryVariables>(RecentLaunchesIdsDocument, options);
      }
export function useRecentLaunchesIdsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RecentLaunchesIdsQuery, RecentLaunchesIdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<RecentLaunchesIdsQuery, RecentLaunchesIdsQueryVariables>(RecentLaunchesIdsDocument, options);
        }
export type RecentLaunchesIdsQueryHookResult = ReturnType<typeof useRecentLaunchesIdsQuery>;
export type RecentLaunchesIdsLazyQueryHookResult = ReturnType<typeof useRecentLaunchesIdsLazyQuery>;
export type RecentLaunchesIdsQueryResult = Apollo.QueryResult<RecentLaunchesIdsQuery, RecentLaunchesIdsQueryVariables>;
export const RocketDetailsDocument = gql`
    query rocketDetails($rocketId: String!) {
  rocket(id: $rocketId) {
    rocket_id
    rocket_name
    description
    active
    first_flight
    height {
      meters
    }
    diameter {
      meters
    }
    mass {
      kg
    }
    stages
    boosters
    cost_per_launch
    success_rate_pct
    landing_legs {
      number
      material
    }
    company
    country
    wikipedia
    payload_weights {
      name
      kg
    }
    first_stage {
      reusable
      engines
      fuel_amount_tons
      burn_time_sec
      thrust_sea_level {
        kN
      }
      thrust_vacuum {
        kN
      }
    }
    second_stage {
      engines
      fuel_amount_tons
      burn_time_sec
      thrust {
        kN
      }
      payloads {
        option_1
        option_2
        composite_fairing {
          height {
            meters
          }
          diameter {
            meters
          }
        }
      }
    }
    engines {
      number
      type
      version
      layout
      engine_loss_max
      propellant_1
      propellant_2
      thrust_sea_level {
        kN
      }
      thrust_vacuum {
        kN
      }
      thrust_to_weight
    }
    flickr_images
  }
}
    `;

/**
 * __useRocketDetailsQuery__
 *
 * To run a query within a React component, call `useRocketDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRocketDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRocketDetailsQuery({
 *   variables: {
 *      rocketId: // value for 'rocketId'
 *   },
 * });
 */
export function useRocketDetailsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<RocketDetailsQuery, RocketDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<RocketDetailsQuery, RocketDetailsQueryVariables>(RocketDetailsDocument, options);
      }
export function useRocketDetailsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RocketDetailsQuery, RocketDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<RocketDetailsQuery, RocketDetailsQueryVariables>(RocketDetailsDocument, options);
        }
export type RocketDetailsQueryHookResult = ReturnType<typeof useRocketDetailsQuery>;
export type RocketDetailsLazyQueryHookResult = ReturnType<typeof useRocketDetailsLazyQuery>;
export type RocketDetailsQueryResult = Apollo.QueryResult<RocketDetailsQuery, RocketDetailsQueryVariables>;
export const RocketsDataShortDocument = gql`
    query RocketsDataShort {
  rockets {
    rocket_id
    rocket_name
    active
    first_flight
    description
    wikipedia
  }
}
    `;

/**
 * __useRocketsDataShortQuery__
 *
 * To run a query within a React component, call `useRocketsDataShortQuery` and pass it any options that fit your needs.
 * When your component renders, `useRocketsDataShortQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRocketsDataShortQuery({
 *   variables: {
 *   },
 * });
 */
export function useRocketsDataShortQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<RocketsDataShortQuery, RocketsDataShortQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<RocketsDataShortQuery, RocketsDataShortQueryVariables>(RocketsDataShortDocument, options);
      }
export function useRocketsDataShortLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RocketsDataShortQuery, RocketsDataShortQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<RocketsDataShortQuery, RocketsDataShortQueryVariables>(RocketsDataShortDocument, options);
        }
export type RocketsDataShortQueryHookResult = ReturnType<typeof useRocketsDataShortQuery>;
export type RocketsDataShortLazyQueryHookResult = ReturnType<typeof useRocketsDataShortLazyQuery>;
export type RocketsDataShortQueryResult = Apollo.QueryResult<RocketsDataShortQuery, RocketsDataShortQueryVariables>;
export const SingleLaunchDocument = gql`
    query singleLaunch($flightNumber: String) {
  launch(id: $flightNumber) {
    flight_number
    mission_name
    launch_date_unix
    launch_site {
      site_name
    }
    launch_success
    links {
      mission_patch_small
      article_link
      video_link
    }
  }
}
    `;

/**
 * __useSingleLaunchQuery__
 *
 * To run a query within a React component, call `useSingleLaunchQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleLaunchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleLaunchQuery({
 *   variables: {
 *      flightNumber: // value for 'flightNumber'
 *   },
 * });
 */
export function useSingleLaunchQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SingleLaunchQuery, SingleLaunchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleLaunchQuery, SingleLaunchQueryVariables>(SingleLaunchDocument, options);
      }
export function useSingleLaunchLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleLaunchQuery, SingleLaunchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleLaunchQuery, SingleLaunchQueryVariables>(SingleLaunchDocument, options);
        }
export type SingleLaunchQueryHookResult = ReturnType<typeof useSingleLaunchQuery>;
export type SingleLaunchLazyQueryHookResult = ReturnType<typeof useSingleLaunchLazyQuery>;
export type SingleLaunchQueryResult = Apollo.QueryResult<SingleLaunchQuery, SingleLaunchQueryVariables>;