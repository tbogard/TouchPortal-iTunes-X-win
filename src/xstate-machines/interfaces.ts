import { IITPlaylist } from "../interfaces/IITPlaylist";

/* Defining a common interface for the state values in Touch Portal */
export interface TPortalKeyValue {
  id: string;
  value: string;
  [key: string]: any;
}

/**
 * this interface provides the shape of the context object that is passed to the state machine
 */
export interface ITPITunesStateContext {
  PlayerState: TPortalKeyValue;
  Volume: TPortalKeyValue;
  Shuffle: TPortalKeyValue;
  Repeat: TPortalKeyValue;
  PlayLists: {
    id: string,
    value: any,
    index: {
      [key: string]: IITPlaylist,
    },
    valueChoices: any[],
    currentName: string,
  };
  CurrentTrackName: TPortalKeyValue;
  CurrentTrackAlbum: TPortalKeyValue;
  CurrentTrackArtist: TPortalKeyValue;
  CurrentTrackPlayedTime: TPortalKeyValue;
  CurrentTrackRemainingTime: TPortalKeyValue;
  CurrentTrackAlbumArtwork: TPortalKeyValue;
  CurrentStreamTitle: TPortalKeyValue;
  CurrentStreamURL: TPortalKeyValue;
  _HoldAction: Record<string, unknown>;
  canSearchImage: boolean;
  lastSearchSong: string;
  TouchPortalSettings: Record<string, unknown>;
}

export interface TPEvent {
  data: any[],
  pluginId: string,
  actionId: string,
  type:string,
}

